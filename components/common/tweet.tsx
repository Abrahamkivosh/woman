import { Stack } from "@chakra-ui/react";
import { unstable_cache } from "next/cache";
import { Suspense } from "react";
import { EmbeddedTweet, TweetNotFound, TweetSkeleton } from "react-tweet";
import { getTweet as _getTweet } from "react-tweet/api";

const getTweet = unstable_cache(
  async (id: string) => _getTweet(id),
  ["tweet"],
  { revalidate: 3600 * 24 }
);

const TweetPage = async ({ id }: { id: string }) => {
  try {
    const tweet = await getTweet(id);
    return tweet ? <EmbeddedTweet tweet={tweet} /> : <TweetNotFound />;
  } catch (error) {
    console.error(error);
    return <TweetNotFound error={error} />;
  }
};

const XTweet = () => {
  return (
    <Stack data-theme="dark" align="center">
      <Suspense fallback={<TweetSkeleton />}>
        <TweetPage id="1821156475428876431" />
      </Suspense>
    </Stack>
  );
};

export default XTweet;
