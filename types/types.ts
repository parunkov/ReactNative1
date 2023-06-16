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

export { Auto, GreetingProps };
