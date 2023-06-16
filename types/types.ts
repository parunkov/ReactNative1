type Auto = {
    name: string;
    driver: string;
    category: string;
    phone?: string;
    latitude: number;
    longitude: number;
};

type GreetingProps = {
    auto: Auto;
}

type AutoProps = {
    auto: Auto;
    key: number;
    callback: () => void;
}


export { Auto, GreetingProps, AutoProps };
