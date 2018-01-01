import Link from 'gatsby-link';
import * as React from 'react';

type PageDirection = 'left' | 'right';

interface Page {
    title: string;
    url: string;
}

interface PageButtonProps {
    page: Page;
    direction: PageDirection;
}

interface PaginationProps {
    previous?: Page;
    next?: Page;
}

const getTextForDirection = (direction: PageDirection) => {
    if (direction === 'left') {
        return 'Previous';
    } else if (direction === 'right') {
        return 'Next';
    }
};

const PageButton = (props: PageButtonProps) =>
    <Link
        to={props.page.url}
        className={`btn pagination-${props.direction}`}>
        {getTextForDirection(props.direction)}
    </Link>;

const maybeRenderPageButton = (props: PaginationProps) => {
    if (props.previous) {
        return <PageButton page={props.previous} direction="left" />;
    } else if (props.next) {
        return <PageButton page={props.next} direction="right" />;
    }
    return null;
};

export default (props: PaginationProps) =>
    <nav className="pagination" role="navigation">
        {maybeRenderPageButton(props)}
    </nav>;
