import * as React from 'react';

import NavigationMenuButton from './button';
import NavigationMenuOptions from './options';

interface NavigationMenuProps {
    siteMetadata: {
        author: {
            github: string;
        }
    }
}

export default ({ siteMetadata }: NavigationMenuProps) => 
    <header>
        <a href="">
            <img className="" src="" alt="" />
        </a>
        <NavigationMenuButton />
        <NavigationMenuOptions author={ siteMetadata.author } />
    </header>