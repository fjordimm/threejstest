
export function WRITABLE_FIELD(this_, name, value)
{
    Object.defineProperty(this_, name, { value: value, writable: true, configurable: false });
}

export function READONLY_FIELD(this_, name, value)
{
    Object.defineProperty(this_, name, { value: value, writable: false, configurable: false });
}
