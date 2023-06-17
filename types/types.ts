type Auto = {
    name: string;
    driver: string;
    category: string;
    phone?: string;
    latitude: number;
    longitude: number;
};

type Filter = {
    [key: string]: boolean;
} 

type AutoProps = {
    auto: Auto;
    key: number;
    callback: () => void;
}

type AutoScreenProps = {
    auto: Auto;
    key: number;
    autoFilter: Filter;
    callback: () => void;
}

type MapProps = {
    autoData: Auto[];
    autoFilter: Filter;
    latitude: number;
    longitude: number;
}

type FilterItemProps = {
    filterText: string;
    filterValue: boolean;
    callback: (filterText: string, value: boolean) => void;
}

export { Auto, MapProps, AutoProps, Filter, AutoScreenProps, FilterItemProps };
