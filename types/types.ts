type Auto = {
    name: string;
    driver: string;
    category: string;
    color?: string;
};

type GreetingProps = {
    auto: Auto;
}

export { Auto, GreetingProps };
