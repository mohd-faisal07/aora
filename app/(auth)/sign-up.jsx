import React, { useState } from "react";
import { ScrollView, Text, View, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { createUser } from "../../lib/appwrite";
import { images } from "@/constants";
import FormField from "@/components/FromField";
import { Link, router } from "expo-router";
import CustomButton from "@/components/CustomButton";
const signUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.email || !form.username || !form.password) {
      Alert.alert("Error", "Please fill all the flieds!");
    }

    setIsSubmitting(true);

    try {
      router.replace("/home");
      const result = await createUser(form.email, form.password, form.username);

      // global it using context...
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[85vh] px-4 my-6 justify-center">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode="contain"
          />
          <Text className="text-2xl text-white font-psemibold mt-10">
            Sign Up to Aura
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keybordType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="sign-up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          >
            Sign Up
          </CustomButton>
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have an account?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signUp;
