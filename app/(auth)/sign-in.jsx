import React, { useState } from "react";
import { ScrollView, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants";
import FormField from "@/components/FromField";
import { Link } from "expo-router";
import CustomButton from "@/components/CustomButton";
const signIn = () => {
  const [from, setFrom] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = () => {};
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
            log in to Aura
          </Text>
          <FormField
            title="Email"
            value={from.email}
            handleChangeText={(e) => setFrom({ ...form, email: e })}
            otherStyles="mt-7"
            keybordType="email-address"
          />
          <FormField
            title="Password"
            value={from.password}
            handleChangeText={(e) => setFrom({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="sign-in"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          >
            Sign In
          </CustomButton>
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signIn;
