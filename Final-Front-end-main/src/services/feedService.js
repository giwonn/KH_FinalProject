import ApiService from "./.apiservice";
const FeedService = () => {};

FeedService.selectFeeds = (email) => {
    return ApiService.getWithHeader("/feed.do", email);
}

export default FeedService;