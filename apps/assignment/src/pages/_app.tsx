import "../../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ThemeProvider } from "@emotion/react";
import theme from "styles/theme";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HsContainer } from "@hs-platforms/hs-core-ui";
import ProvideAuth from "src/provider/ProvideAuth";
import rootStore from "src/models/RootStore";
import { StoreProvider } from "src/hooks/useStore";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient} contextSharing>
        <ProvideAuth>
          <StoreProvider value={rootStore}>
            <Hydrate state={pageProps.dehydratedState}>
              <HsContainer margin={"0 auto"} maxWidth={"700px"}>
                <Component {...pageProps} />
              </HsContainer>
            </Hydrate>
          </StoreProvider>
        </ProvideAuth>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
