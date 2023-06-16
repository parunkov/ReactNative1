type Auto = {
    name: string;
    driver: string;
    category: string;
    phone?: string;
    latitude: number;
    longitude: number;
};

type AutoProps = {
    auto: Auto;
    key: number;
    callback: () => void;
}

type Filter = {
    [key: string]: boolean;
}
type MapProps = {
    autoData: Auto[];
    autoFilter: Filter;
}

export { Auto, MapProps, AutoProps, Filter };
