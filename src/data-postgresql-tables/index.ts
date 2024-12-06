/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/tables
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPostgresqlTablesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The PostgreSQL database which will be queried for table names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/tables#database DataPostgresqlTables#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/tables#id DataPostgresqlTables#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Expression(s) which will be pattern matched against table names in the query using the PostgreSQL LIKE ALL operator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/tables#like_all_patterns DataPostgresqlTables#like_all_patterns}
  */
  readonly likeAllPatterns?: string[];
  /**
  * Expression(s) which will be pattern matched against table names in the query using the PostgreSQL LIKE ANY operator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/tables#like_any_patterns DataPostgresqlTables#like_any_patterns}
  */
  readonly likeAnyPatterns?: string[];
  /**
  * Expression(s) which will be pattern matched against table names in the query using the PostgreSQL NOT LIKE ALL operator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/tables#not_like_all_patterns DataPostgresqlTables#not_like_all_patterns}
  */
  readonly notLikeAllPatterns?: string[];
  /**
  * Expression which will be pattern matched against table names in the query using the PostgreSQL ~ (regular expression match) operator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/tables#regex_pattern DataPostgresqlTables#regex_pattern}
  */
  readonly regexPattern?: string;
  /**
  * The PostgreSQL schema(s) which will be queried for table names. Queries all schemas in the database by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/tables#schemas DataPostgresqlTables#schemas}
  */
  readonly schemas?: string[];
  /**
  * The PostgreSQL table types which will be queried for table names. Includes all table types by default. Use 'BASE TABLE' for normal tables only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/tables#table_types DataPostgresqlTables#table_types}
  */
  readonly tableTypes?: string[];
}
export interface DataPostgresqlTablesTables {
}

export function dataPostgresqlTablesTablesToTerraform(struct?: DataPostgresqlTablesTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPostgresqlTablesTablesToHclTerraform(struct?: DataPostgresqlTablesTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPostgresqlTablesTablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPostgresqlTablesTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPostgresqlTablesTables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_name - computed: true, optional: false, required: false
  public get objectName() {
    return this.getStringAttribute('object_name');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // table_type - computed: true, optional: false, required: false
  public get tableType() {
    return this.getStringAttribute('table_type');
  }
}

export class DataPostgresqlTablesTablesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPostgresqlTablesTablesOutputReference {
    return new DataPostgresqlTablesTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/tables postgresql_tables}
*/
export class DataPostgresqlTables extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "postgresql_tables";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPostgresqlTables resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPostgresqlTables to import
  * @param importFromId The id of the existing DataPostgresqlTables that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/tables#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPostgresqlTables to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "postgresql_tables", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/data-sources/tables postgresql_tables} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPostgresqlTablesConfig
  */
  public constructor(scope: Construct, id: string, config: DataPostgresqlTablesConfig) {
    super(scope, id, {
      terraformResourceType: 'postgresql_tables',
      terraformGeneratorMetadata: {
        providerName: 'postgresql',
        providerVersion: '1.25.0',
        providerVersionConstraint: '~> 1.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._database = config.database;
    this._id = config.id;
    this._likeAllPatterns = config.likeAllPatterns;
    this._likeAnyPatterns = config.likeAnyPatterns;
    this._notLikeAllPatterns = config.notLikeAllPatterns;
    this._regexPattern = config.regexPattern;
    this._schemas = config.schemas;
    this._tableTypes = config.tableTypes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // like_all_patterns - computed: false, optional: true, required: false
  private _likeAllPatterns?: string[]; 
  public get likeAllPatterns() {
    return this.getListAttribute('like_all_patterns');
  }
  public set likeAllPatterns(value: string[]) {
    this._likeAllPatterns = value;
  }
  public resetLikeAllPatterns() {
    this._likeAllPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get likeAllPatternsInput() {
    return this._likeAllPatterns;
  }

  // like_any_patterns - computed: false, optional: true, required: false
  private _likeAnyPatterns?: string[]; 
  public get likeAnyPatterns() {
    return this.getListAttribute('like_any_patterns');
  }
  public set likeAnyPatterns(value: string[]) {
    this._likeAnyPatterns = value;
  }
  public resetLikeAnyPatterns() {
    this._likeAnyPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get likeAnyPatternsInput() {
    return this._likeAnyPatterns;
  }

  // not_like_all_patterns - computed: false, optional: true, required: false
  private _notLikeAllPatterns?: string[]; 
  public get notLikeAllPatterns() {
    return this.getListAttribute('not_like_all_patterns');
  }
  public set notLikeAllPatterns(value: string[]) {
    this._notLikeAllPatterns = value;
  }
  public resetNotLikeAllPatterns() {
    this._notLikeAllPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notLikeAllPatternsInput() {
    return this._notLikeAllPatterns;
  }

  // regex_pattern - computed: false, optional: true, required: false
  private _regexPattern?: string; 
  public get regexPattern() {
    return this.getStringAttribute('regex_pattern');
  }
  public set regexPattern(value: string) {
    this._regexPattern = value;
  }
  public resetRegexPattern() {
    this._regexPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexPatternInput() {
    return this._regexPattern;
  }

  // schemas - computed: false, optional: true, required: false
  private _schemas?: string[]; 
  public get schemas() {
    return this.getListAttribute('schemas');
  }
  public set schemas(value: string[]) {
    this._schemas = value;
  }
  public resetSchemas() {
    this._schemas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas;
  }

  // table_types - computed: false, optional: true, required: false
  private _tableTypes?: string[]; 
  public get tableTypes() {
    return this.getListAttribute('table_types');
  }
  public set tableTypes(value: string[]) {
    this._tableTypes = value;
  }
  public resetTableTypes() {
    this._tableTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableTypesInput() {
    return this._tableTypes;
  }

  // tables - computed: true, optional: false, required: false
  private _tables = new DataPostgresqlTablesTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database: cdktf.stringToTerraform(this._database),
      id: cdktf.stringToTerraform(this._id),
      like_all_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._likeAllPatterns),
      like_any_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._likeAnyPatterns),
      not_like_all_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notLikeAllPatterns),
      regex_pattern: cdktf.stringToTerraform(this._regexPattern),
      schemas: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemas),
      table_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tableTypes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database: {
        value: cdktf.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      like_all_patterns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._likeAllPatterns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      like_any_patterns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._likeAnyPatterns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      not_like_all_patterns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notLikeAllPatterns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      regex_pattern: {
        value: cdktf.stringToHclTerraform(this._regexPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schemas: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._schemas),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      table_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tableTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
