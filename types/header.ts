export interface Link {
    title: string;
    url: string;
}

export interface Column {
    title: string;
    links: Link[];
}

export interface Section {
    title: string;
    links: Link[];
}

export interface NavItem {
    id: string;
    title: string;
    type: 'link' | 'dropdown' | 'mega-menu';
    url?: string;
    links?: Link[];
    columns?: Column[];
    secondRow?: Column[];
    sections?: Section[];
}

export interface Contact {
    label: string;
    numbers: string[];
}

export interface TopBanner {
    text: string;
    code: string;
    condition: string;
}

export interface HeaderData {
    topBanner: TopBanner;
    contact: Contact;
    searchPlaceholder: string;
    navItems: NavItem[];
}