// eslint-disable-next-line no-undef
const APP_VARIANT = process.env.APP_VARIANT || "dev";
const PACKAGE_NAME = "com.androxxe.mobile";

export default {
  expo: {
    name: `androxxe-mobile.${APP_VARIANT !== "prod" ? APP_VARIANT : ""}`,
    slug: `androxxe-mobile.${APP_VARIANT !== "prod" ? APP_VARIANT : ""}`,
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: `${PACKAGE_NAME}${APP_VARIANT === "prod" ? "" : `.${APP_VARIANT}`}`,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: `${PACKAGE_NAME}${APP_VARIANT === "prod" ? "" : `.${APP_VARIANT}`}`,
    },
    web: {
      favicon: "./assets/favicon.png",
    },
  },
};
