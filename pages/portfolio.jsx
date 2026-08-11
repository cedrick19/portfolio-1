import Head from "next/head";
import { useQuery } from "@tanstack/react-query";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import axios from "axios";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";
import { NAME } from "../constants/constants";

const Portfolio = () => {

    const { isLoading, data } = useQuery({
        queryKey: ["portfolio"],
        queryFn: () =>
            axios.get('api/portfolio')
                .then(({ data }) => data)
                .catch(error => console.error('Error fetching portfolio:', error)),
    })
    return (
        <BannerLayout>
            <Head>
                <title>{`Projects | ${NAME}`}</title>
                <meta
                    name="description"
                    content={`A selection of projects built by ${NAME}, spanning automation, cloud, and full-stack development.`}
                />
            </Head>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-8 py-6 max-w-6xl mx-auto">

                {
                    isLoading ?
                        [1, 2, 3, 4].map((item) => (
                            <ImageAndParagraphSkeleton key={`portfolio-skeleton-${item}`} className={"w-full object-cover"} />
                        ))
                        :
                        data?.map((portfolioItem) => (
                            <PortfolioCard key={portfolioItem.id} data={portfolioItem} />
                        ))

                }


            </div >
            <Footer />
        </BannerLayout >
    );
};

export default Portfolio;
