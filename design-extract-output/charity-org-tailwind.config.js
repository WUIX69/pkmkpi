/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(86, 60%, 97%)',
            '100': 'hsl(86, 60%, 94%)',
            '200': 'hsl(86, 60%, 86%)',
            '300': 'hsl(86, 60%, 76%)',
            '400': 'hsl(86, 60%, 64%)',
            '500': 'hsl(86, 60%, 50%)',
            '600': 'hsl(86, 60%, 40%)',
            '700': 'hsl(86, 60%, 32%)',
            '800': 'hsl(86, 60%, 24%)',
            '900': 'hsl(86, 60%, 16%)',
            '950': 'hsl(86, 60%, 10%)',
            DEFAULT: '#80bc2f'
        },
        secondary: {
            '50': 'hsl(190, 82%, 97%)',
            '100': 'hsl(190, 82%, 94%)',
            '200': 'hsl(190, 82%, 86%)',
            '300': 'hsl(190, 82%, 76%)',
            '400': 'hsl(190, 82%, 64%)',
            '500': 'hsl(190, 82%, 50%)',
            '600': 'hsl(190, 82%, 40%)',
            '700': 'hsl(190, 82%, 32%)',
            '800': 'hsl(190, 82%, 24%)',
            '900': 'hsl(190, 82%, 16%)',
            '950': 'hsl(190, 82%, 10%)',
            DEFAULT: '#06333c'
        },
        accent: {
            '50': 'hsl(39, 82%, 97%)',
            '100': 'hsl(39, 82%, 94%)',
            '200': 'hsl(39, 82%, 86%)',
            '300': 'hsl(39, 82%, 76%)',
            '400': 'hsl(39, 82%, 64%)',
            '500': 'hsl(39, 82%, 50%)',
            '600': 'hsl(39, 82%, 40%)',
            '700': 'hsl(39, 82%, 32%)',
            '800': 'hsl(39, 82%, 24%)',
            '900': 'hsl(39, 82%, 16%)',
            '950': 'hsl(39, 82%, 10%)',
            DEFAULT: '#eba92f'
        },
        'neutral-50': '#333333',
        'neutral-100': '#ffffff',
        'neutral-200': '#000000',
        'neutral-300': '#202020',
        'neutral-400': '#f1f1f1',
        background: '#ffffff',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'Montserrat',
            'sans-serif'
        ],
        body: [
            'eicons',
            'sans-serif'
        ],
        font2: [
            'turbinado-pro',
            'sans-serif'
        ]
    },
    fontSize: {
        '25': [
            '25px',
            {
                lineHeight: '36px'
            }
        ],
        '28': [
            '28px',
            {
                lineHeight: '33.6px'
            }
        ],
        '29': [
            '29px',
            {
                lineHeight: '29px'
            }
        ],
        '32': [
            '32px',
            {
                lineHeight: '28px'
            }
        ],
        '38': [
            '38px',
            {
                lineHeight: '45px'
            }
        ],
        '42': [
            '42px',
            {
                lineHeight: '44px'
            }
        ],
        '48': [
            '48px',
            {
                lineHeight: '60px'
            }
        ],
        '50': [
            '50px',
            {
                lineHeight: '50px'
            }
        ],
        '64': [
            '64px',
            {
                lineHeight: '68px'
            }
        ],
        '72': [
            '72px',
            {
                lineHeight: '68px'
            }
        ],
        '80': [
            '80px',
            {
                lineHeight: '50px'
            }
        ],
        '86': [
            '86px',
            {
                lineHeight: '86px'
            }
        ],
        '90': [
            '90px',
            {
                lineHeight: '45px'
            }
        ],
        '130': [
            '130px',
            {
                lineHeight: '68px'
            }
        ],
        '140': [
            '140px',
            {
                lineHeight: '140px'
            }
        ]
    },
    spacing: {
        '15': '30px',
        '17': '34px',
        '19': '38px',
        '23': '46px',
        '30': '60px',
        '32': '64px',
        '34': '68px',
        '39': '78px',
        '42': '84px',
        '45': '90px',
        '67': '134px',
        '80': '160px',
        '132': '264px',
        '1px': '1px',
        '75px': '75px'
    },
    borderRadius: {
        sm: '3px',
        md: '10px',
        full: '50px'
    },
    boxShadow: {
        xs: 'rgba(0, 0, 0, 0) 1px 1px 0px 0px',
        md: 'rgba(0, 0, 0, 0.24) 0px 0px 10px 0px',
        lg: 'rgba(35, 35, 35, 0.1) 0px 0px 30px 0px'
    },
    screens: {
        sm: '600px',
        md: '768px',
        lg: '1025px',
        '1200px': '1200px'
    },
    transitionDuration: {
        '200': '0.2s',
        '250': '0.25s',
        '300': '0.3s',
        '400': '0.4s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0.17, 0.04, 0.03, 0.94)'
    },
    container: {
        center: true,
        padding: '64px'
    },
    maxWidth: {
        container: '100%'
    }
},
  },
};
