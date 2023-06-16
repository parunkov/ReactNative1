type Auto = {
    name: string;
    driver: string;
    category: string;
    color?: string;
    phone?: string;
};

type GreetingProps = {
    auto: Auto;
}

export { Auto, GreetingProps };
