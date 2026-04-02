tailwind.config = {
    theme: {
        extend: {
            maxWidth: {
                '2lg': '1250px', // custom max-width
            },
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                black: 'var(--color-tertiary)',
                white: 'var(--color-white)',

                error: 'var(--color-danger)',
                warning: 'var(--color-warning)',
                info: 'var(--color-info)',
                success: 'var(--color-success)',

                // heading & text
                heading: 'var(--color-heading)',
                body: 'var(--color-body)',
                lightn: 'var(--color-lightn)',

                // gray scale (custom mapping)
                'gray-50': 'var(--color-lightest)',
                'gray-100': 'var(--color-lighter)',
                'gray-200': 'var(--color-light)',
                'gray-300': 'var(--color-gray)',
                'gray-400': 'var(--color-midgray)',
                'gray-500': 'var(--color-body)',
                'gray-600': 'var(--color-body-white)',
                'gray-700': 'var(--background-color-2)',
                'gray-800': 'var(--color-tertiary)',
                'gray-900': 'var(--color-heading-wv)',

                // social colors
                facebook: 'var(--color-facebook)',
                twitter: 'var(--color-twitter)',
                youtube: 'var(--color-youtube)',
                linkedin: 'var(--color-linkedin)',
                instagram: 'var(--color-instagram)',
                discord: 'var(--color-discord)',
            },

            screens: {
                'xl-1': '1140px',   // iPhone SE, small Android
            },
        },
    },
}
