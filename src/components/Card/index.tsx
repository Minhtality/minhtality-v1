import React from "react";

interface CardProps {
	title: string;
	description: string;
	thumbnail?: string;
	avatar?: string;
	author: string;
	date: string;
	tags: string[];
}

const index = ({ title, description }: CardProps) => {
	return (
		<div>
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	);
};

export default index;
