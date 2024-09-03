import type { FC } from "react";
import ProductCard from "./ProductCard";

type ProductSectionProps = {
	title: string;
	products: Array<{
		image: string;
		title: string;
		description: string;
		userType: string;
		requests: number;
		location: string;
		date: string;
	}>;
};

const ProductSection: FC<ProductSectionProps> = ({ title, products }) => {
	return (
		<section>
			<h2 className="mt-1.5 text-2xl font-semibold leading-8 text-zinc-900 max-md:max-w-full">
				{title}
			</h2>
			<div className="flex gap-2 justify-center mt-6 max-md:flex-wrap">
				<div className="flex flex-col justify-center p-0.5 max-md:max-w-full">
					<div className="flex gap-5 max-md:flex max-md:flex-row">
						{products.map((product, index) => (
							<ProductCard key={index + title} {...product} />
						))}
					</div>
				</div>
				<img
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae15e9c3983576fb98e9e7b0241383a755e2adbd22589ad4d5d9014b8934cc73?apiKey=e659b181c3ec4be580186cc59fea34e1&"
					alt=""
					className="shrink-0 my-auto w-10 shadow-sm aspect-square max-md:hidden"
				/>
			</div>
		</section>
	);
};

export default ProductSection;
