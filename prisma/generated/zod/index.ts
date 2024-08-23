import { z } from 'zod';
import { Prisma } from '../client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

// DECIMAL
//------------------------------------------------------

export const DecimalJsLikeSchema: z.ZodType<Prisma.DecimalJsLike> = z.object({
    d: z.array(z.number()),
    e: z.number(),
    s: z.number(),
    toFixed: z.function(z.tuple([]), z.string()),
});

export const DECIMAL_STRING_REGEX =
    /^(?:-?Infinity|NaN|-?(?:0[bB][01]+(?:\.[01]+)?(?:[pP][-+]?\d+)?|0[oO][0-7]+(?:\.[0-7]+)?(?:[pP][-+]?\d+)?|0[xX][\da-fA-F]+(?:\.[\da-fA-F]+)?(?:[pP][-+]?\d+)?|(?:\d+|\d*\.\d+)(?:[eE][-+]?\d+)?))$/;

export const isValidDecimalInput = (
    v?: null | string | number | Prisma.DecimalJsLike
): v is string | number | Prisma.DecimalJsLike => {
    if (v === undefined || v === null) return false;
    return (
        (typeof v === 'object' && 'd' in v && 'e' in v && 's' in v && 'toFixed' in v) ||
        (typeof v === 'string' && DECIMAL_STRING_REGEX.test(v)) ||
        typeof v === 'number'
    );
};

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum([
    'ReadUncommitted',
    'ReadCommitted',
    'RepeatableRead',
    'Serializable',
    'Snapshot',
]);

export const AppUserScalarFieldEnumSchema = z.enum(['id', 'studentId']);

export const AppSessionScalarFieldEnumSchema = z.enum(['id', 'userId', 'expiresAt']);

export const AppEmailVerificationCodesScalarFieldEnumSchema = z.enum([
    'id',
    'code',
    'expiresAt',
    'userId',
]);

export const MstExpenseHeadScalarFieldEnumSchema = z.enum([
    'ExpenseHeadIDP',
    'ExpenseHeadName',
    'IsActive',
    'IsDeleted',
    'EntryBy',
    'EntryDate',
]);

export const MstFeesScalarFieldEnumSchema = z.enum([
    'FeesIDP',
    'DepositFee',
    'TurmFee1',
    'TurmFee2',
    'TurmFee3',
    'TurmFee4',
    'TurmFee5',
    'TurmFee6',
    'TurmFee7',
    'TurmFee8',
    'TurmFee9',
    'TurmFee1_Collection',
    'TurmFee2_Collection',
    'TurmFee3_Collection',
    'TurmFee4_Collection',
    'TurmFee5_Collection',
    'TurmFee6_Collection',
    'TurmFee7_Collection',
    'TurmFee8_Collection',
    'TurmFee9_Collection',
    'FeesTypeID',
    'BatchID',
    'IsActive',
    'IsDelete',
    'EntryBy',
    'EntryDate',
]);

export const SysAdminScalarFieldEnumSchema = z.enum([
    'AdminIDP',
    'UserName',
    'Password',
    'FirstName',
    'LastName',
    'TermFee',
    'SMTPEmailAddress',
    'SMTPUserName',
    'SMTPPassword',
    'SMTPHost',
    'SMTPPort',
    'SMTPSSL',
    'OTP',
    'SMSKey',
    'GoogleMapKey',
    'GoogleLocationKey',
    'PaymentGatewayKey',
    'RevenueCommission',
    'CDNPath',
    'UpdatedDate',
]);

export const TblBudgetScalarFieldEnumSchema = z.enum([
    'BudgetIDP',
    'FinancialYearID',
    'ExpenseHeadIDF',
    'BudgetAmount',
    'Remarks',
    'IsDeleted',
    'EntryBy',
    'EntryDate',
]);

export const TblDocumentScalarFieldEnumSchema = z.enum([
    'DocumentIDP',
    'StudentIDF',
    'DocumentTypeID',
    'Attachment',
    'IsDelete',
    'EntryBy',
    'EntryDate',
]);

export const TblExpenseScalarFieldEnumSchema = z.enum([
    'ExpenseIDP',
    'ExpenseHeadIDF',
    'ExpenseDate',
    'Amount',
    'Remarks',
    'IsDeleted',
    'EntryBy',
    'EntryDate',
]);

export const TblFeesScalarFieldEnumSchema = z.enum([
    'FeesIDP',
    'StudentIDF',
    'TermID',
    'TermEntryID',
    'ReceiptDate',
    'ReceiptAmount',
    'Remarks',
]);

export const TblStaffScalarFieldEnumSchema = z.enum([
    'StaffIDP',
    'FullName',
    'MobileNo',
    'Email',
    'GenderID',
    'DesignationID',
    'DepartmentID',
    'StaffTypeID',
    'DateOfBirth',
    'Age',
    'DateOfJoining',
    'DateOfAddmission',
    'CastandReligion',
    'Qualification',
    'UGPassingDate',
    'UGCollageName',
    'UGUniversityName',
    'PGPassingDate',
    'PGCollageName',
    'PGUniversityName',
    'StateRegNumber',
    'NCHRegNumber',
    'ExperienceDetail',
    'PromotionDate',
    'PromotionDesignationID',
    'AdharNumber',
    'PANNumber',
    'PermanentAddress1',
    'PermanentAddress2',
    'PermanentCity',
    'PermanentDistrict',
    'PermanentState',
    'CurrentAddress1',
    'CurrentAddress2',
    'CurrentCity',
    'CurrentDistrict',
    'CurrentState',
    'RefferancePerson',
    'PassportPhoto',
    'SignPhoto',
    'Scale',
    'Password',
    'OTP',
    'Remark1',
    'Remark2',
    'IsActive',
    'IsDelete',
    'EntryBy',
    'EntryDate',
]);

export const TblStaffExperienceScalarFieldEnumSchema = z.enum([
    'StaffExperienceIDP',
    'StaffIDF',
    'InstituteName',
    'FromDate',
    'ToDate',
    'Designation',
    'TotalYear',
    'IsDelete',
    'EntryDate',
]);

export const TblStudentScalarFieldEnumSchema = z.enum([
    'StudentIDP',
    'FullName',
    'MobileNo',
    'Email',
    'GenderID',
    'Address',
    'FatherMobileNo',
    'CuurentYearID',
    'GRNNo',
    'AadharNumber',
    'PANNo',
    'ScholarshipAmount',
    'EnrollmenyYear',
    'FeesTypeID',
    'BatchID',
    'Remark1',
    'Remark2',
    'Remark3',
    'Password',
    'OTP',
    'TermFee',
    'TotalFee',
    'DepositRefundable',
    'DepositReceived',
    'ImportRefID',
    'ProfileImage',
    'PassYear1',
    'PassYear2',
    'PassYear3',
    'PassYear4',
    'IsActive',
    'IsDelete',
    'EntryBy',
    'EntryDate',
]);

export const SortOrderSchema = z.enum(['asc', 'desc']);

export const NullsOrderSchema = z.enum(['first', 'last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// APP USER SCHEMA
/////////////////////////////////////////

export const AppUserSchema = z.object({
    id: z.string(),
    studentId: z.bigint(),
});

export type AppUser = z.infer<typeof AppUserSchema>;

/////////////////////////////////////////
// APP SESSION SCHEMA
/////////////////////////////////////////

export const AppSessionSchema = z.object({
    id: z.string(),
    userId: z.string(),
    expiresAt: z.coerce.date(),
});

export type AppSession = z.infer<typeof AppSessionSchema>;

/////////////////////////////////////////
// APP EMAIL VERIFICATION CODES SCHEMA
/////////////////////////////////////////

export const AppEmailVerificationCodesSchema = z.object({
    id: z.bigint(),
    code: z.string(),
    expiresAt: z.coerce.date(),
    userId: z.string(),
});

export type AppEmailVerificationCodes = z.infer<typeof AppEmailVerificationCodesSchema>;

/////////////////////////////////////////
// MST EXPENSE HEAD SCHEMA
/////////////////////////////////////////

export const mstExpenseHeadSchema = z.object({
    ExpenseHeadIDP: z.bigint(),
    ExpenseHeadName: z.string(),
    IsActive: z.boolean(),
    IsDeleted: z.boolean().nullable(),
    EntryBy: z.bigint(),
    EntryDate: z.coerce.date(),
});

export type mstExpenseHead = z.infer<typeof mstExpenseHeadSchema>;

/////////////////////////////////////////
// MST FEES SCHEMA
/////////////////////////////////////////

export const mstFeesSchema = z.object({
    FeesIDP: z.bigint(),
    DepositFee: z.number().int().nullable(),
    TurmFee1: z.number().int().nullable(),
    TurmFee2: z.number().int().nullable(),
    TurmFee3: z.number().int().nullable(),
    TurmFee4: z.number().int().nullable(),
    TurmFee5: z.number().int().nullable(),
    TurmFee6: z.number().int().nullable(),
    TurmFee7: z.number().int().nullable(),
    TurmFee8: z.number().int().nullable(),
    TurmFee9: z.number().int().nullable(),
    TurmFee1_Collection: z.coerce.date().nullable(),
    TurmFee2_Collection: z.coerce.date().nullable(),
    TurmFee3_Collection: z.coerce.date().nullable(),
    TurmFee4_Collection: z.coerce.date().nullable(),
    TurmFee5_Collection: z.coerce.date().nullable(),
    TurmFee6_Collection: z.coerce.date().nullable(),
    TurmFee7_Collection: z.coerce.date().nullable(),
    TurmFee8_Collection: z.coerce.date().nullable(),
    TurmFee9_Collection: z.coerce.date().nullable(),
    FeesTypeID: z.number().int().nullable(),
    BatchID: z.number().int().nullable(),
    IsActive: z.boolean(),
    IsDelete: z.boolean().nullable(),
    EntryBy: z.bigint().nullable(),
    EntryDate: z.coerce.date().nullable(),
});

export type mstFees = z.infer<typeof mstFeesSchema>;

/////////////////////////////////////////
// SYS ADMIN SCHEMA
/////////////////////////////////////////

export const sysAdminSchema = z.object({
    AdminIDP: z.number().int(),
    UserName: z.string().nullable(),
    Password: z.string().nullable(),
    FirstName: z.string().nullable(),
    LastName: z.string().nullable(),
    TermFee: z.number().nullable(),
    SMTPEmailAddress: z.string().nullable(),
    SMTPUserName: z.string().nullable(),
    SMTPPassword: z.string().nullable(),
    SMTPHost: z.string().nullable(),
    SMTPPort: z.number().int().nullable(),
    SMTPSSL: z.boolean().nullable(),
    OTP: z.number().int().nullable(),
    SMSKey: z.string().nullable(),
    GoogleMapKey: z.string().nullable(),
    GoogleLocationKey: z.string().nullable(),
    PaymentGatewayKey: z.string().nullable(),
    RevenueCommission: z.string().nullable(),
    CDNPath: z.string().nullable(),
    UpdatedDate: z.coerce.date().nullable(),
});

export type sysAdmin = z.infer<typeof sysAdminSchema>;

/////////////////////////////////////////
// TBL BUDGET SCHEMA
/////////////////////////////////////////

export const tblBudgetSchema = z.object({
    BudgetIDP: z.bigint(),
    FinancialYearID: z.number().int(),
    ExpenseHeadIDF: z.bigint(),
    BudgetAmount: z.instanceof(Prisma.Decimal, {
        message: "Field 'BudgetAmount' must be a Decimal. Location: ['Models', 'tblBudget']",
    }),
    Remarks: z.string().nullable(),
    IsDeleted: z.boolean().nullable(),
    EntryBy: z.bigint(),
    EntryDate: z.coerce.date(),
});

export type tblBudget = z.infer<typeof tblBudgetSchema>;

/////////////////////////////////////////
// TBL DOCUMENT SCHEMA
/////////////////////////////////////////

export const tblDocumentSchema = z.object({
    DocumentIDP: z.bigint(),
    StudentIDF: z.bigint(),
    DocumentTypeID: z.number().int().nullable(),
    Attachment: z.string().nullable(),
    IsDelete: z.boolean().nullable(),
    EntryBy: z.bigint().nullable(),
    EntryDate: z.coerce.date().nullable(),
});

export type tblDocument = z.infer<typeof tblDocumentSchema>;

/////////////////////////////////////////
// TBL EXPENSE SCHEMA
/////////////////////////////////////////

export const tblExpenseSchema = z.object({
    ExpenseIDP: z.bigint(),
    ExpenseHeadIDF: z.bigint(),
    ExpenseDate: z.coerce.date(),
    Amount: z.instanceof(Prisma.Decimal, {
        message: "Field 'Amount' must be a Decimal. Location: ['Models', 'tblExpense']",
    }),
    Remarks: z.string().nullable(),
    IsDeleted: z.boolean().nullable(),
    EntryBy: z.bigint(),
    EntryDate: z.coerce.date(),
});

export type tblExpense = z.infer<typeof tblExpenseSchema>;

/////////////////////////////////////////
// TBL FEES SCHEMA
/////////////////////////////////////////

export const tblFeesSchema = z.object({
    FeesIDP: z.bigint(),
    StudentIDF: z.bigint(),
    TermID: z.number().int(),
    TermEntryID: z.number().int().nullable(),
    ReceiptDate: z.coerce.date().nullable(),
    ReceiptAmount: z
        .instanceof(Prisma.Decimal, {
            message: "Field 'ReceiptAmount' must be a Decimal. Location: ['Models', 'tblFees']",
        })
        .nullable(),
    Remarks: z.string().nullable(),
});

export type tblFees = z.infer<typeof tblFeesSchema>;

/////////////////////////////////////////
// TBL STAFF SCHEMA
/////////////////////////////////////////

export const tblStaffSchema = z.object({
    StaffIDP: z.bigint(),
    FullName: z.string().nullable(),
    MobileNo: z.string().nullable(),
    Email: z.string().nullable(),
    GenderID: z.number().int().nullable(),
    DesignationID: z.number().int().nullable(),
    DepartmentID: z.number().int().nullable(),
    StaffTypeID: z.number().int().nullable(),
    DateOfBirth: z.coerce.date().nullable(),
    Age: z.number().int().nullable(),
    DateOfJoining: z.coerce.date().nullable(),
    DateOfAddmission: z.coerce.date().nullable(),
    CastandReligion: z.string().nullable(),
    Qualification: z.string().nullable(),
    UGPassingDate: z.coerce.date().nullable(),
    UGCollageName: z.string().nullable(),
    UGUniversityName: z.string().nullable(),
    PGPassingDate: z.coerce.date().nullable(),
    PGCollageName: z.string().nullable(),
    PGUniversityName: z.string().nullable(),
    StateRegNumber: z.string().nullable(),
    NCHRegNumber: z.string().nullable(),
    ExperienceDetail: z.string().nullable(),
    PromotionDate: z.coerce.date().nullable(),
    PromotionDesignationID: z.number().int().nullable(),
    AdharNumber: z.bigint().nullable(),
    PANNumber: z.string().nullable(),
    PermanentAddress1: z.string().nullable(),
    PermanentAddress2: z.string().nullable(),
    PermanentCity: z.string().nullable(),
    PermanentDistrict: z.string().nullable(),
    PermanentState: z.string().nullable(),
    CurrentAddress1: z.string().nullable(),
    CurrentAddress2: z.string().nullable(),
    CurrentCity: z.string().nullable(),
    CurrentDistrict: z.string().nullable(),
    CurrentState: z.string().nullable(),
    RefferancePerson: z.string().nullable(),
    PassportPhoto: z.string().nullable(),
    SignPhoto: z.string().nullable(),
    Scale: z.number().nullable(),
    Password: z.string().nullable(),
    OTP: z.string().nullable(),
    Remark1: z.string().nullable(),
    Remark2: z.string().nullable(),
    IsActive: z.boolean(),
    IsDelete: z.boolean().nullable(),
    EntryBy: z.bigint(),
    EntryDate: z.coerce.date().nullable(),
});

export type tblStaff = z.infer<typeof tblStaffSchema>;

/////////////////////////////////////////
// TBL STAFF EXPERIENCE SCHEMA
/////////////////////////////////////////

export const tblStaffExperienceSchema = z.object({
    StaffExperienceIDP: z.bigint(),
    StaffIDF: z.bigint(),
    InstituteName: z.string().nullable(),
    FromDate: z.coerce.date().nullable(),
    ToDate: z.coerce.date().nullable(),
    Designation: z.string().nullable(),
    TotalYear: z
        .instanceof(Prisma.Decimal, {
            message:
                "Field 'TotalYear' must be a Decimal. Location: ['Models', 'tblStaffExperience']",
        })
        .nullable(),
    IsDelete: z.boolean().nullable(),
    EntryDate: z.coerce.date().nullable(),
});

export type tblStaffExperience = z.infer<typeof tblStaffExperienceSchema>;

/////////////////////////////////////////
// TBL STUDENT SCHEMA
/////////////////////////////////////////

export const tblStudentSchema = z.object({
    StudentIDP: z.bigint(),
    FullName: z.string().nullable(),
    MobileNo: z.string().nullable(),
    Email: z.string().nullable(),
    GenderID: z.number().int().nullable(),
    Address: z.string().nullable(),
    FatherMobileNo: z.string().nullable(),
    CuurentYearID: z
        .instanceof(Prisma.Decimal, {
            message: "Field 'CuurentYearID' must be a Decimal. Location: ['Models', 'tblStudent']",
        })
        .nullable(),
    GRNNo: z.string().nullable(),
    AadharNumber: z.bigint().nullable(),
    PANNo: z.string().nullable(),
    ScholarshipAmount: z.number().int().nullable(),
    EnrollmenyYear: z.string().nullable(),
    FeesTypeID: z.number().int().nullable(),
    BatchID: z.number().int().nullable(),
    Remark1: z.string().nullable(),
    Remark2: z.string().nullable(),
    Remark3: z.string().nullable(),
    Password: z.string().nullable(),
    OTP: z.string().nullable(),
    TermFee: z.number().nullable(),
    TotalFee: z.number().nullable(),
    DepositRefundable: z.number().nullable(),
    DepositReceived: z.number().nullable(),
    ImportRefID: z.bigint().nullable(),
    ProfileImage: z.string().nullable(),
    PassYear1: z.number().int().nullable(),
    PassYear2: z.number().int().nullable(),
    PassYear3: z.number().int().nullable(),
    PassYear4: z.number().int().nullable(),
    IsActive: z.boolean(),
    IsDelete: z.boolean().nullable(),
    EntryBy: z.bigint(),
    EntryDate: z.coerce.date(),
});

export type tblStudent = z.infer<typeof tblStudentSchema>;
