const REGION = "ap-northeast-2";

export default {
  s3: {
    REGION,
    BUCKET: "ssbock"
  },
  apiGateway: {
    REGION,
    URL: "https://lkn4cjwl40.execute-api.ap-northeast-2.amazonaws.com/dev"
  },
  cognito: {
    REGION,
    USER_POOL_ID: "ap-northeast-2_sEHyPqj7H",
    APP_CLIENT_ID: "498bict7ngi1ree37i4298utov",
    IDENTITY_POOL_ID: "ap-northeast-2:ba7c0702-1787-46f8-affc-1a268b40385a"
  }
};
