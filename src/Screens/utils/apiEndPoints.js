export default {
    JWTTOKEN: 'tokenGenrate/jwtToken',
    SIGNUP: 'userAuth/userSignup',
    SIGNIN: 'userAuth/userSignin',
    CONFIRMOTP: 'userAuth/userVerify',
    RESENDOTP: 'userAuth/resentOTP',
    EDITPROFILE: 'userAuth/editUserProfile',
    CHANGEPASSWORD: 'userAuth/changePassword',
    SENDFORGOTOTP: 'userAuth/forgotPassword',
    PASSWORDUPDATE: 'userAuth/newPasswordUpdate',
    DASHBOARDDATA: 'dashboard/getDashboardListing',
    MOVIEDETAIL: 'movie/getMovieDetail',
    SEEALLLIST: "movie/MoviesListbycategory",
    GETPLAN: "payment/getPackagePlan",
    PAYMENT:"payment/userPayment",
    SAVERATING:"movie/moviesReview",
    USERPROFILEIMG:"userAuth/userProfileChange",
    GETUSERPROFILE:"userAuth/getUserProfile",
    CHANGEPASSWORDNYOTP:"userAuth/changePasswordbyotp",
    DASHBOARDMENULISTING:'dashboard/getDashboardListData',
    DASHBOARDSEARCHIG:'dashboard/dashboardSearching',
    COUNTRYLIST:'userAuth/getCountryList',
    APPLYCOUPON:'payment/applyCoupon',
    SERIALALLLIST:'tvshow/getCategorySerialListbycategory',
    SERIALDETAIL:"tvshow/getSerialDetail",
    EPISODELIST:"tvshow/getSerialEpisode",
    EPISODEETAIL:"tvshow/getSerialEpisodeDetail",
    CONTINUEWATCHING:"movie/continueWatchingMovie",
    CONTINUEWATCHINGSERIAL:"tvshow/continueWatchingserial",
    MOVIELIKES:"webservice/userMoviesLike",
    CONTACTUS:'userAuth/contactUs',
    MOBILEVERIFYOTP:"userAuth/userVerifybySms",
    CREATESUBSCRIPTION:"payment/createsubcription",
    CREATETRANSACTION:"payment/checktransaction",
    CANCELSUBSCRIPTION:"payment/cancelsubscription",
}