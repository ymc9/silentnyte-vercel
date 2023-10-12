declare const metadata: {
    fields: {
        example: {
            id: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            name: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            createdAt: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            updatedAt: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
        };
        account: {
            id: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            userId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            type: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            provider: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            providerAccountId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            refresh_token: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            access_token: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            expires_at: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            token_type: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            scope: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            id_token: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            session_state: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            user: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: {
                    id: string;
                };
            };
        };
        session: {
            id: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            sessionToken: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            userId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            expires: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            user: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: {
                    id: string;
                };
            };
        };
        user: {
            id: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            name: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            email: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            emailVerified: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            password: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            role: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            image: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            accounts: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            sessions: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
        };
        verificationToken: {
            identifier: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            token: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            expires: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
        };
    };
    uniqueConstraints: {
        example: {
            id: {
                name: string;
                fields: string[];
            };
        };
        account: {
            provider_providerAccountId: {
                name: string;
                fields: string[];
            };
            id: {
                name: string;
                fields: string[];
            };
        };
        session: {
            id: {
                name: string;
                fields: string[];
            };
            sessionToken: {
                name: string;
                fields: string[];
            };
        };
        user: {
            id: {
                name: string;
                fields: string[];
            };
            email: {
                name: string;
                fields: string[];
            };
        };
        verificationToken: {
            identifier_token: {
                name: string;
                fields: string[];
            };
            token: {
                name: string;
                fields: string[];
            };
        };
    };
};
export default metadata;
