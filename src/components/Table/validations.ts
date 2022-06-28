export const validationColumn = (variant: String[]) => {
    if(Array.isArray(variant) && variant.length > 0 && typeof(variant[0]) === 'string'){
        return variant;
    }
    return [] as String[];
}

export const validationIndex = (variant: Number[]) => {
    if(Array.isArray(variant) && variant.length > 0 && typeof(variant[0]) === 'number'){
        return variant;
    }
    return [] as Number[];
}
