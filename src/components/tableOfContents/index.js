import React, {useMemo} from 'react';

import './index.scss';


export default function TableOfContents({item, currentHeaderUrl}) {
    
    console.log(currentHeaderUrl);

    const Item = useMemo(()=>{
        if (currentHeaderUrl) {
            return item.replace(
                `"${currentHeaderUrl}"`,
                `"${currentHeaderUrl}" class="font:bold"`
            );
        } else {
            return item;
        }
    },[currentHeaderUrl]);


    return item ? (
        <nav>
            <div
                className="toc"
                dangerouslySetInnerHTML={{ __html: Item }}
            />
        </nav>
    ) 
    : null
}