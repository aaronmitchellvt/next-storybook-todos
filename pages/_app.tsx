import "./global.css";
import type { AppProps } from "next/app";
import { NextPageWithLayout } from "./page";
import { QueryClient, QueryClientProvider } from "react-query";

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
      <QueryClientProvider client={queryClient}>
        {getLayout(<Component {...pageProps} />)}
      </QueryClientProvider>
  );
}

export default MyApp;
