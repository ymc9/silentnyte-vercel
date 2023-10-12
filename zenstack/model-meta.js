"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
const metadata = {
    fields: {
        example: {
            id: {
                name: "id",
                type: "Int",
                isId: true,
                isDataModel: false,
                isArray: false,
                isOptional: false,
                attributes: [{ "name": "@id", "args": [] }],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, name: {
                name: "name",
                type: "String",
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: false,
                attributes: [],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, createdAt: {
                name: "createdAt",
                type: "DateTime",
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: false,
                attributes: [],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, updatedAt: {
                name: "updatedAt",
                type: "DateTime",
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: false,
                attributes: [{ "name": "@updatedAt", "args": [] }],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            },
        },
        account: {
            id: {
                name: "id",
                type: "String",
                isId: true,
                isDataModel: false,
                isArray: false,
                isOptional: false,
                attributes: [{ "name": "@id", "args": [] }],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, userId: {
                name: "userId",
                type: "String",
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: false,
                attributes: [],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: true,
                foreignKeyMapping: undefined
            }, type: {
                name: "type",
                type: "String",
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: false,
                attributes: [],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, provider: {
                name: "provider",
                type: "String",
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: false,
                attributes: [],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, providerAccountId: {
                name: "providerAccountId",
                type: "String",
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: false,
                attributes: [],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, refresh_token: {
                name: "refresh_token",
                type: "String",
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: true,
                attributes: [],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, access_token: {
                name: "access_token",
                type: "String",
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: true,
                attributes: [],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, expires_at: {
                name: "expires_at",
                type: "Int",
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: true,
                attributes: [],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, token_type: {
                name: "token_type",
                type: "String",
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: true,
                attributes: [],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, scope: {
                name: "scope",
                type: "String",
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: true,
                attributes: [],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, id_token: {
                name: "id_token",
                type: "String",
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: true,
                attributes: [],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, session_state: {
                name: "session_state",
                type: "String",
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: true,
                attributes: [],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, user: {
                name: "user",
                type: "User",
                isId: false,
                isDataModel: true,
                isArray: false,
                isOptional: false,
                attributes: [],
                backLink: 'accounts',
                isRelationOwner: true,
                isForeignKey: false,
                foreignKeyMapping: { "id": "userId" }
            },
        },
        session: {
            id: {
                name: "id",
                type: "String",
                isId: true,
                isDataModel: false,
                isArray: false,
                isOptional: false,
                attributes: [{ "name": "@id", "args": [] }],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, sessionToken: {
                name: "sessionToken",
                type: "String",
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: false,
                attributes: [{ "name": "@unique", "args": [] }],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, userId: {
                name: "userId",
                type: "String",
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: false,
                attributes: [],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: true,
                foreignKeyMapping: undefined
            }, expires: {
                name: "expires",
                type: "DateTime",
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: false,
                attributes: [],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, user: {
                name: "user",
                type: "User",
                isId: false,
                isDataModel: true,
                isArray: false,
                isOptional: false,
                attributes: [],
                backLink: 'sessions',
                isRelationOwner: true,
                isForeignKey: false,
                foreignKeyMapping: { "id": "userId" }
            },
        },
        user: {
            id: {
                name: "id",
                type: "String",
                isId: true,
                isDataModel: false,
                isArray: false,
                isOptional: false,
                attributes: [{ "name": "@id", "args": [] }],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, name: {
                name: "name",
                type: "String",
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: true,
                attributes: [],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, email: {
                name: "email",
                type: "String",
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: true,
                attributes: [{ "name": "@unique", "args": [] }],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, emailVerified: {
                name: "emailVerified",
                type: "DateTime",
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: true,
                attributes: [],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, password: {
                name: "password",
                type: "String",
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: false,
                attributes: [{ "name": "@password", "args": [] }, { "name": "@omit", "args": [] }],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, role: {
                name: "role",
                type: "UserRole",
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: false,
                attributes: [],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, image: {
                name: "image",
                type: "String",
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: true,
                attributes: [],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, accounts: {
                name: "accounts",
                type: "Account",
                isId: false,
                isDataModel: true,
                isArray: true,
                isOptional: false,
                attributes: [],
                backLink: 'user',
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, sessions: {
                name: "sessions",
                type: "Session",
                isId: false,
                isDataModel: true,
                isArray: true,
                isOptional: false,
                attributes: [],
                backLink: 'user',
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            },
        },
        verificationToken: {
            identifier: {
                name: "identifier",
                type: "String",
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: false,
                attributes: [],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, token: {
                name: "token",
                type: "String",
                isId: true,
                isDataModel: false,
                isArray: false,
                isOptional: false,
                attributes: [{ "name": "@unique", "args": [] }],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            }, expires: {
                name: "expires",
                type: "DateTime",
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: false,
                attributes: [],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined
            },
        },
    },
    uniqueConstraints: {
        example: {
            id: {
                name: "id",
                fields: ["id"]
            },
        },
        account: {
            provider_providerAccountId: {
                name: "provider_providerAccountId",
                fields: ["provider", "providerAccountId"]
            }, id: {
                name: "id",
                fields: ["id"]
            },
        },
        session: {
            id: {
                name: "id",
                fields: ["id"]
            }, sessionToken: {
                name: "sessionToken",
                fields: ["sessionToken"]
            },
        },
        user: {
            id: {
                name: "id",
                fields: ["id"]
            }, email: {
                name: "email",
                fields: ["email"]
            },
        },
        verificationToken: {
            identifier_token: {
                name: "identifier_token",
                fields: ["identifier", "token"]
            }, token: {
                name: "token",
                fields: ["token"]
            },
        },
    },
};
exports.default = metadata;
