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
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">

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
