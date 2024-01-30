import React from 'react'
import { Content } from '@prismicio/client';


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

  return (
    <div>
      <u className='grid border-b border-b-slate-100'>
        {items.map((item, index) => (
            <li key={index} 
                className=''
            >
                <a href="">
                    <div>
                        <span>{item.data.title}</span>
                        <div>
                            {item.tags.map((tag, index) => (
                                <span key={index}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <span>{viewMoreText}</span>

                </a>
            </li>
        ))}
        
      </u>
    </div>
  )
}

export default ContentList
