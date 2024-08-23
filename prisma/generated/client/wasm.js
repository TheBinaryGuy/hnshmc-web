
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.18.0
 * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
 */
Prisma.prismaVersion = {
  client: "5.18.0",
  engine: "4c784e32044a8a016d99474bd02a3b6123742169"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
  Snapshot: 'Snapshot'
});

exports.Prisma.AppUserScalarFieldEnum = {
  id: 'id',
  studentId: 'studentId'
};

exports.Prisma.AppSessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  expiresAt: 'expiresAt'
};

exports.Prisma.AppEmailVerificationCodesScalarFieldEnum = {
  id: 'id',
  code: 'code',
  expiresAt: 'expiresAt',
  userId: 'userId'
};

exports.Prisma.MstExpenseHeadScalarFieldEnum = {
  ExpenseHeadIDP: 'ExpenseHeadIDP',
  ExpenseHeadName: 'ExpenseHeadName',
  IsActive: 'IsActive',
  IsDeleted: 'IsDeleted',
  EntryBy: 'EntryBy',
  EntryDate: 'EntryDate'
};

exports.Prisma.MstFeesScalarFieldEnum = {
  FeesIDP: 'FeesIDP',
  DepositFee: 'DepositFee',
  TurmFee1: 'TurmFee1',
  TurmFee2: 'TurmFee2',
  TurmFee3: 'TurmFee3',
  TurmFee4: 'TurmFee4',
  TurmFee5: 'TurmFee5',
  TurmFee6: 'TurmFee6',
  TurmFee7: 'TurmFee7',
  TurmFee8: 'TurmFee8',
  TurmFee9: 'TurmFee9',
  TurmFee1_Collection: 'TurmFee1_Collection',
  TurmFee2_Collection: 'TurmFee2_Collection',
  TurmFee3_Collection: 'TurmFee3_Collection',
  TurmFee4_Collection: 'TurmFee4_Collection',
  TurmFee5_Collection: 'TurmFee5_Collection',
  TurmFee6_Collection: 'TurmFee6_Collection',
  TurmFee7_Collection: 'TurmFee7_Collection',
  TurmFee8_Collection: 'TurmFee8_Collection',
  TurmFee9_Collection: 'TurmFee9_Collection',
  FeesTypeID: 'FeesTypeID',
  BatchID: 'BatchID',
  IsActive: 'IsActive',
  IsDelete: 'IsDelete',
  EntryBy: 'EntryBy',
  EntryDate: 'EntryDate'
};

exports.Prisma.SysAdminScalarFieldEnum = {
  AdminIDP: 'AdminIDP',
  UserName: 'UserName',
  Password: 'Password',
  FirstName: 'FirstName',
  LastName: 'LastName',
  TermFee: 'TermFee',
  SMTPEmailAddress: 'SMTPEmailAddress',
  SMTPUserName: 'SMTPUserName',
  SMTPPassword: 'SMTPPassword',
  SMTPHost: 'SMTPHost',
  SMTPPort: 'SMTPPort',
  SMTPSSL: 'SMTPSSL',
  OTP: 'OTP',
  SMSKey: 'SMSKey',
  GoogleMapKey: 'GoogleMapKey',
  GoogleLocationKey: 'GoogleLocationKey',
  PaymentGatewayKey: 'PaymentGatewayKey',
  RevenueCommission: 'RevenueCommission',
  CDNPath: 'CDNPath',
  UpdatedDate: 'UpdatedDate'
};

exports.Prisma.TblBudgetScalarFieldEnum = {
  BudgetIDP: 'BudgetIDP',
  FinancialYearID: 'FinancialYearID',
  ExpenseHeadIDF: 'ExpenseHeadIDF',
  BudgetAmount: 'BudgetAmount',
  Remarks: 'Remarks',
  IsDeleted: 'IsDeleted',
  EntryBy: 'EntryBy',
  EntryDate: 'EntryDate'
};

exports.Prisma.TblDocumentScalarFieldEnum = {
  DocumentIDP: 'DocumentIDP',
  StudentIDF: 'StudentIDF',
  DocumentTypeID: 'DocumentTypeID',
  Attachment: 'Attachment',
  IsDelete: 'IsDelete',
  EntryBy: 'EntryBy',
  EntryDate: 'EntryDate'
};

exports.Prisma.TblExpenseScalarFieldEnum = {
  ExpenseIDP: 'ExpenseIDP',
  ExpenseHeadIDF: 'ExpenseHeadIDF',
  ExpenseDate: 'ExpenseDate',
  Amount: 'Amount',
  Remarks: 'Remarks',
  IsDeleted: 'IsDeleted',
  EntryBy: 'EntryBy',
  EntryDate: 'EntryDate'
};

exports.Prisma.TblFeesScalarFieldEnum = {
  FeesIDP: 'FeesIDP',
  StudentIDF: 'StudentIDF',
  TermID: 'TermID',
  TermEntryID: 'TermEntryID',
  ReceiptDate: 'ReceiptDate',
  ReceiptAmount: 'ReceiptAmount',
  Remarks: 'Remarks'
};

exports.Prisma.TblStaffScalarFieldEnum = {
  StaffIDP: 'StaffIDP',
  FullName: 'FullName',
  MobileNo: 'MobileNo',
  Email: 'Email',
  GenderID: 'GenderID',
  DesignationID: 'DesignationID',
  DepartmentID: 'DepartmentID',
  StaffTypeID: 'StaffTypeID',
  DateOfBirth: 'DateOfBirth',
  Age: 'Age',
  DateOfJoining: 'DateOfJoining',
  DateOfAddmission: 'DateOfAddmission',
  CastandReligion: 'CastandReligion',
  Qualification: 'Qualification',
  UGPassingDate: 'UGPassingDate',
  UGCollageName: 'UGCollageName',
  UGUniversityName: 'UGUniversityName',
  PGPassingDate: 'PGPassingDate',
  PGCollageName: 'PGCollageName',
  PGUniversityName: 'PGUniversityName',
  StateRegNumber: 'StateRegNumber',
  NCHRegNumber: 'NCHRegNumber',
  ExperienceDetail: 'ExperienceDetail',
  PromotionDate: 'PromotionDate',
  PromotionDesignationID: 'PromotionDesignationID',
  AdharNumber: 'AdharNumber',
  PANNumber: 'PANNumber',
  PermanentAddress1: 'PermanentAddress1',
  PermanentAddress2: 'PermanentAddress2',
  PermanentCity: 'PermanentCity',
  PermanentDistrict: 'PermanentDistrict',
  PermanentState: 'PermanentState',
  CurrentAddress1: 'CurrentAddress1',
  CurrentAddress2: 'CurrentAddress2',
  CurrentCity: 'CurrentCity',
  CurrentDistrict: 'CurrentDistrict',
  CurrentState: 'CurrentState',
  RefferancePerson: 'RefferancePerson',
  PassportPhoto: 'PassportPhoto',
  SignPhoto: 'SignPhoto',
  Scale: 'Scale',
  Password: 'Password',
  OTP: 'OTP',
  Remark1: 'Remark1',
  Remark2: 'Remark2',
  IsActive: 'IsActive',
  IsDelete: 'IsDelete',
  EntryBy: 'EntryBy',
  EntryDate: 'EntryDate'
};

exports.Prisma.TblStaffExperienceScalarFieldEnum = {
  StaffExperienceIDP: 'StaffExperienceIDP',
  StaffIDF: 'StaffIDF',
  InstituteName: 'InstituteName',
  FromDate: 'FromDate',
  ToDate: 'ToDate',
  Designation: 'Designation',
  TotalYear: 'TotalYear',
  IsDelete: 'IsDelete',
  EntryDate: 'EntryDate'
};

exports.Prisma.TblStudentScalarFieldEnum = {
  StudentIDP: 'StudentIDP',
  FullName: 'FullName',
  MobileNo: 'MobileNo',
  Email: 'Email',
  GenderID: 'GenderID',
  Address: 'Address',
  FatherMobileNo: 'FatherMobileNo',
  CuurentYearID: 'CuurentYearID',
  GRNNo: 'GRNNo',
  AadharNumber: 'AadharNumber',
  PANNo: 'PANNo',
  ScholarshipAmount: 'ScholarshipAmount',
  EnrollmenyYear: 'EnrollmenyYear',
  FeesTypeID: 'FeesTypeID',
  BatchID: 'BatchID',
  Remark1: 'Remark1',
  Remark2: 'Remark2',
  Remark3: 'Remark3',
  Password: 'Password',
  OTP: 'OTP',
  TermFee: 'TermFee',
  TotalFee: 'TotalFee',
  DepositRefundable: 'DepositRefundable',
  DepositReceived: 'DepositReceived',
  ImportRefID: 'ImportRefID',
  ProfileImage: 'ProfileImage',
  PassYear1: 'PassYear1',
  PassYear2: 'PassYear2',
  PassYear3: 'PassYear3',
  PassYear4: 'PassYear4',
  IsActive: 'IsActive',
  IsDelete: 'IsDelete',
  EntryBy: 'EntryBy',
  EntryDate: 'EntryDate'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  AppUser: 'AppUser',
  AppSession: 'AppSession',
  AppEmailVerificationCodes: 'AppEmailVerificationCodes',
  mstExpenseHead: 'mstExpenseHead',
  mstFees: 'mstFees',
  sysAdmin: 'sysAdmin',
  tblBudget: 'tblBudget',
  tblDocument: 'tblDocument',
  tblExpense: 'tblExpense',
  tblFees: 'tblFees',
  tblStaff: 'tblStaff',
  tblStaffExperience: 'tblStaffExperience',
  tblStudent: 'tblStudent'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
