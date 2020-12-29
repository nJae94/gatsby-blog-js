import React, {useMemo} from 'react';

import './index.scss';


export default function TableOfContents({item, currentHeaderUrl}) {
    
    const Item = useMemo(()=>{

        if (currentHeaderUrl) {

            return item.replace(
                `"${currentHeaderUrl}"`,
                `"${currentHeaderUrl}" class="current"`
            );
        } else {
            return item;
        }
    },[currentHeaderUrl]);


    return item ? (

    <div className="menu">
                <div 
                className="toc"
                dangerouslySetInnerHTML={{ __html: Item }}>
                </div>
    </div>
    ) 
    : null
}