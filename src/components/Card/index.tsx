import React from "react";
import * as Styled from "./index.styled";
interface CardProps {
    title: string;
    description: string;
    thumbnail?: string;
    avatar?: string;
    author: string;
    date: string;
    tags: string[];
}

const index = ({ title, description, thumbnail, date, author }: CardProps) => {
    const dateFormat = new Date(date);
    const day = dateFormat.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
    return (
        <Styled.Card>
            <Styled.ThumbnailContainer>
                <Styled.Thumbnail src={thumbnail} alt="thumbnail" />
            </Styled.ThumbnailContainer>
            <p>{title}</p>
            <p>{description}</p>
            <p>{author}</p>
            <Styled.Date>{day}</Styled.Date>
        </Styled.Card>
    );
};

export default index;
