const permissionFlags = require('../assets/json/permissionFlags.json');

module.exports = {
    getMissingPermission(permissions) {
        const missingPermissions = [];

        for (const permission of permissions) {
            missingPermissions.push(permissionFlags[permission])
        }

        return missingPermissions
    }
}