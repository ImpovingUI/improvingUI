export const validationColumn = (variant: String[]) => {
    if(Array.isArray(variant) && variant.length > 0 && typeof(variant[0]) === 'string'){
        return variant;
    }
    return [] as String[];
}
