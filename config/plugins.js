module.exports = ({ env }) => ({
  upload: {
    provider: env("MEDIA_PROVIDER", "cloudinary"),
    providerOptions: {
      cloud_name: env("CLOUDINARY_NAME"),
      api_key: env("CLOUDINARY_KEY"),
      api_secret: env("CLOUDINARY_SECRET"),
      upload_preset: env("CLOUDINARY_PRESET", "local"),
    },
  },
});
