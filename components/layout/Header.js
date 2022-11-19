import React from 'react';
import Link from 'next/link';

const Header = () => {
    const headerNav = [
        {
            title: 'Главная',
            link: '/',
        },
        {
            title: 'Разные примеры работ',
            link: '/examples-board',
        },
        {
            title: 'Контакты',
            link: '/contacts',
        },
        {
            title: 'Test',
            link: '/test',
        },
    ]

    return (
        <header className="header">
            <nav>
                <ul className='cols cols--start'>
                    {
                        headerNav.map((item, index)=>
                            <li key={index}>
                                <Link href={item.link}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </header>

    )
}

export default Header;