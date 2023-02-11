
export const backgroundGenerator = (type) => {

    if (type === 'fire') {
        return 'bg-red-500'
    };


    if (type === 'grass') {
        return 'bg-green-700'
    };

    if (type === 'bug') {
        return 'bg-green-400'
    };

    if (type === 'normal') {
        return 'bg-black'
    };

    if (type === 'poison') {
        return 'bg-purple-600'
    };

    if (type === 'electric') {
        return 'bg-yellow-400'
    };

    if (type === 'ground') {
        return 'bg-yellow-800'
    };

    if (type === 'fairy') {
        return 'bg-pink-500'
    };

    if (type === 'fighting') {
        return 'bg-red-800'
    };

    if (type === 'psychic') {
        return 'bg-blue-300'
    };

    if (type === 'rock') {
        return 'bg-slate-600'
    };
    
    if (type === 'ghost') {
        return 'bg-purple-900'
    };

    if (type === 'ice') {
        return 'bg-blue-200'
    };

    if (type === 'dragon') {
        return 'bg-red-400'
    };

    if (type === 'flying') {
        return 'bg-blue-900'
    };

    if (type === 'water') {
        return 'bg-blue-500'
    };

    return ''
}

export const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
