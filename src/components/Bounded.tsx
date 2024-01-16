import Recat from 'react';

type BoundedProps = {
    as?: React.ElementType;
}

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps> (
    ({ as: Comp = "section", className, children, ...restProps}, ref) => {
        return (
            <Comp
                ref={ref} 
                className={"px-4 py-10 md:px-6 md:py-14 lg:py-16"}
                {...restProps}
            >
                <div>
                    {children}
                </div>
            </Comp>
        )
    }
)