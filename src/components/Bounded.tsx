import Recat from 'react';

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps> (
    ({ as: Comp = "section", className, children, ...restProps}, ref) => {
        return (
            <Comp
                ref={ref} 
                className={}
                {...restProps}
            >
                <div>
                    {children}
                </div>

            </Comp>
        )
    }
)