import React from "react";
export interface SaveBarProps {
    onSave?: () => void;
    onRefresh?: () => void;
    showBack?: boolean;
    lastSaveTime?: number;
}
declare const _default: React.NamedExoticComponent<SaveBarProps>;
export default _default;
