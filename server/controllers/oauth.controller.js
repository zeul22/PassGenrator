import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { User } from "../models/User.model.js";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as LinkedInStrategy } from "passport-linkedin-oauth2";
import { Strategy as GitHubStrategy } from "passport-github2";

const oAuth = asyncHandler(async (req, res) => {
  // Google
  passport.use(
    new GoogleStrategy(
      {
        clientID: "YOUR_GOOGLE_CLIENT_ID",
        clientSecret: "YOUR_GOOGLE_CLIENT_SECRET",
        callbackURL: "/auth/google/callback",
      },
      async function (accessToken, refreshToken, profile, done) {
        // Extract user data from the profile object and save to MongoDB

        const user = new User({
          username: profile.displayName,
          email: profile.emails[0].value,
          fname: profile.name.givenName,
          lname: profile.name.familyName,
          password: "Logged in with OAuth", // No password for OAuth users
        });

        const existedUser = await User.findOne({
          $or: [{ username }, { email }],
        });
        if (existedUser) {
          user.then((user) => done(null, user)).catch((err) => done(err));
        } else {
          user
            .save()
            .then((user) => done(null, user))
            .catch((err) => done(err));
        }
      }
    )
  );

  //   Linkedin

  passport.use(
    new LinkedInStrategy(
      {
        clientID: "YOUR_LINKEDIN_CLIENT_ID",
        clientSecret: "YOUR_LINKEDIN_CLIENT_SECRET",
        callbackURL: "/auth/linkedin/callback",
      },
      async function (accessToken, refreshToken, profile, done) {
        const user = new User({
          username: profile.displayName,
          email: profile.emails[0].value,
          fname: profile.name.givenName,
          lname: profile.name.familyName,
          password: "Logged in with OAuth",
        });

        const existedUser = await User.findOne({
          $or: [{ username }, { email }],
        });
        if (existedUser) {
          user.then((user) => done(null, user)).catch((err) => done(err));
        } else {
          user
            .save()
            .then((user) => done(null, user))
            .catch((err) => done(err));
        }
      }
    )
  );

  //   Github

  passport.use(
    new GitHubStrategy(
      {
        clientID: "YOUR_GITHUB_CLIENT_ID",
        clientSecret: "YOUR_GITHUB_CLIENT_SECRET",
        callbackURL: "/auth/github/callback",
      },
      async function (accessToken, refreshToken, profile, done) {
        const user = new User({
          username: profile.displayName,
          email: profile.emails[0].value,
          fname: profile.name.givenName,
          lname: profile.name.familyName,
          password: "Logged in with OAuth",
        });

        const existedUser = await User.findOne({
          $or: [{ username }, { email }],
        });
        if (existedUser) {
          user.then((user) => done(null, user)).catch((err) => done(err));
        } else {
          user
            .save()
            .then((user) => done(null, user))
            .catch((err) => done(err));
        }
      }
    )
  );

  //   const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
  //     user._id
  //   );
  //   const loggedInUser = await User.findById(user._id).select(
  //     "-password -refreshToken"
  //   );

  //   const options = {
  //     httpOnly: true,
  //     secure: true,
  //   };

  //   return res
  //     .status(200)
  //     .cookie("accessToken", accessToken, options)
  //     .cookie("refreshToken", refreshToken, options)
  //     .json(
  //       new ApiResponse(
  //         200,
  //         {
  //           user: loggedInUser,
  //           accessToken,
  //           refreshToken,
  //         },
  //         "User logged In Successfully"
  //       )
  //     );
});

export { oAuth };
