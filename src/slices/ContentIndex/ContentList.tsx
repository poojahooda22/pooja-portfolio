'use client';

import React, { useRef, useState, useEffect } from "react";
import { Content, isFilled } from '@prismicio/client';
import { MdArrowOutward } from 'react-icons/md';
import Link from 'next/link';
import { asImageSrc } from '@prismicio/client';



type ContentListProps = {
    items: Content.BlogPostDocument[] | Content.ProjectDocument[];
    contentType: Content.ContentIndexSlice["primary"]["content_type"];
    fallbackItemImage: Content.ContentIndexSlice["primary"] ["fallback_item_inage"];
    viewMoreText: Content.ContentIndexSlice["primary"]["view_more_text"];
}

function ContentList({
    items,
    contentType,
    fallbackItemImage,
    viewMoreText,
}: ContentListProps) {
    const component = useRef(null);
    const [currentItem, setCurrentItem] = useState<null | number>(null);

    const urlPrefix = contentType === "Blog" ? "/blog" : "/projects";

    const contentImages = items.map((item) => {
        const image = isFilled.image(item.data.hover_image)
          ? item.data.hover_image
          : fallbackItemImage;
        return asImageSrc(image, {
          fit: "crop",
          w: 220,
          h: 320,
          exp: -10,
        });
      });

    const onMouseEnter = (index: number) => {
        setCurrentItem(index);
    }

    const onMouseLeave = () => {
        setCurrentItem(null);
    }
  return (
    <div ref={component}>
        <ul 
            className='grid border-b border-b-slate-100'
            onMouseLeave={onMouseLeave}
        >
            {items.map((item, index) => (
                <>
                {isFilled.keyText(item.data.title) && (
                    <li 
                        key={index} 
                        className='list-item opacity-0f'
                        onMouseEnter={() => onMouseEnter(index)}
                        
                    >
                        <Link 
                            href={urlPrefix + "/" + item.uid}
                            className='flex flex-col justify-between border-t 
                            border-t-slate-100 py-10 text-slate-200 
                            md:flex-row'
                            aria-label={item.data.title}
                        >
                            <div className='flex flex-col'>
                                <span className='text-3xl font-bold' >{item.data.title}</span>
                                <div className='flex gap-2 text-lg'>
                                    {item.tags.map((tag, index) => (
                                        <span 
                                            key={index}
                                            className='text-yellow-500'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <span
                                className='ml-auto flex items-center 
                                gap-2 
                                text-xl font-medium md:ml-0 '
                            >
                                {viewMoreText} <MdArrowOutward />
                            </span>
                        </Link>
                    </li>
                    )}
                </>
            ))}
        </ul>


        {/* Hover Images */}

        <div
            className='hover-reveal pointer-events-none absolute lef-0 top-0 
            -z-10 h-[320px] w-[220px] rounded-lg bg-over bg-center opacity-0 transition-[background] duration-300'
            style={{
                backgroundImage: currentItem !== null ? `url(${contentImages[currentItem]})` : ""
            }}
        >

        </div>
    </div>
  )
}

export default ContentList
