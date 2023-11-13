export const title = {
    initial: {
        y: "100%"
    },
    animate: i => ({ y: "-10%", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.02 * i } })
}

export const generals = {
    initial: {
        y: 50,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 0.3
        }
    },
    exit: {
        y: -50,
        opacity: 0,
        transition: {
            delay: 0.3,
            duration: 0.3
        }
    }
}

export const intro = {
    exit: {
        y: '-100%',
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 0.5
        }
    }
}
