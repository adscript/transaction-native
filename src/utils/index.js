export const BASE_URL = 'https://nextar.flip.id'

export const fontFamily = {
    regular: 'Lato-Regular',
    bold: 'Lato-Bold',
    light: 'Lato-Light',
    thin: 'Lato-Thin',
}

export const color = {
    primary: '#fd6542',
    secondary: '#50c878'
}

export const month = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
]

export const dateFormatter = (timestamp) => {
    let date = timestamp.split(' ')[0]
    let splittedDate = date.split('-')
    return `${splittedDate[2]} ${month[Number(splittedDate[1]) - 1]} ${splittedDate[0]}`
}

export const numberWithThousandSeparator = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}