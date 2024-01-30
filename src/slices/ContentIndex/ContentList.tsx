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
      <ul>
        {items.map((item, index) => (
            <li key={index}>
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

                </a>
            </li>
        ))}
        
      </ul>
    </div>
  )
}

export default ContentList
