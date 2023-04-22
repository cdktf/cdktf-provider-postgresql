# `data_postgresql_tables`

Refer to the Terraform Registory for docs: [`data_postgresql_tables`](https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables).

# `dataPostgresqlTables` Submodule <a name="`dataPostgresqlTables` Submodule" id="@cdktf/provider-postgresql.dataPostgresqlTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPostgresqlTables <a name="DataPostgresqlTables" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables postgresql_tables}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.data_postgresql_tables.DataPostgresqlTables;

DataPostgresqlTables.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .database(java.lang.String)
//  .id(java.lang.String)
//  .likeAllPatterns(java.util.List<java.lang.String>)
//  .likeAnyPatterns(java.util.List<java.lang.String>)
//  .notLikeAllPatterns(java.util.List<java.lang.String>)
//  .regexPattern(java.lang.String)
//  .schemas(java.util.List<java.lang.String>)
//  .tableTypes(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The PostgreSQL database which will be queried for table names. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#id DataPostgresqlTables#id}. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.likeAllPatterns">likeAllPatterns</a></code> | <code>java.util.List<java.lang.String></code> | Expression(s) which will be pattern matched against table names in the query using the PostgreSQL LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.likeAnyPatterns">likeAnyPatterns</a></code> | <code>java.util.List<java.lang.String></code> | Expression(s) which will be pattern matched against table names in the query using the PostgreSQL LIKE ANY operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.notLikeAllPatterns">notLikeAllPatterns</a></code> | <code>java.util.List<java.lang.String></code> | Expression(s) which will be pattern matched against table names in the query using the PostgreSQL NOT LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.regexPattern">regexPattern</a></code> | <code>java.lang.String</code> | Expression which will be pattern matched against table names in the query using the PostgreSQL ~ (regular expression match) operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | The PostgreSQL schema(s) which will be queried for table names. Queries all schemas in the database by default. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.tableTypes">tableTypes</a></code> | <code>java.util.List<java.lang.String></code> | The PostgreSQL table types which will be queried for table names. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The PostgreSQL database which will be queried for table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#database DataPostgresqlTables#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#id DataPostgresqlTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `likeAllPatterns`<sup>Optional</sup> <a name="likeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.likeAllPatterns"></a>

- *Type:* java.util.List<java.lang.String>

Expression(s) which will be pattern matched against table names in the query using the PostgreSQL LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#like_all_patterns DataPostgresqlTables#like_all_patterns}

---

##### `likeAnyPatterns`<sup>Optional</sup> <a name="likeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.likeAnyPatterns"></a>

- *Type:* java.util.List<java.lang.String>

Expression(s) which will be pattern matched against table names in the query using the PostgreSQL LIKE ANY operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#like_any_patterns DataPostgresqlTables#like_any_patterns}

---

##### `notLikeAllPatterns`<sup>Optional</sup> <a name="notLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.notLikeAllPatterns"></a>

- *Type:* java.util.List<java.lang.String>

Expression(s) which will be pattern matched against table names in the query using the PostgreSQL NOT LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#not_like_all_patterns DataPostgresqlTables#not_like_all_patterns}

---

##### `regexPattern`<sup>Optional</sup> <a name="regexPattern" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.regexPattern"></a>

- *Type:* java.lang.String

Expression which will be pattern matched against table names in the query using the PostgreSQL ~ (regular expression match) operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#regex_pattern DataPostgresqlTables#regex_pattern}

---

##### `schemas`<sup>Optional</sup> <a name="schemas" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.schemas"></a>

- *Type:* java.util.List<java.lang.String>

The PostgreSQL schema(s) which will be queried for table names. Queries all schemas in the database by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#schemas DataPostgresqlTables#schemas}

---

##### `tableTypes`<sup>Optional</sup> <a name="tableTypes" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.Initializer.parameter.tableTypes"></a>

- *Type:* java.util.List<java.lang.String>

The PostgreSQL table types which will be queried for table names.

Includes all table types by default. Use 'BASE TABLE' for normal tables only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#table_types DataPostgresqlTables#table_types}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetLikeAllPatterns">resetLikeAllPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetLikeAnyPatterns">resetLikeAnyPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetNotLikeAllPatterns">resetNotLikeAllPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetRegexPattern">resetRegexPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetSchemas">resetSchemas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetTableTypes">resetTableTypes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetId"></a>

```java
public void resetId()
```

##### `resetLikeAllPatterns` <a name="resetLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetLikeAllPatterns"></a>

```java
public void resetLikeAllPatterns()
```

##### `resetLikeAnyPatterns` <a name="resetLikeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetLikeAnyPatterns"></a>

```java
public void resetLikeAnyPatterns()
```

##### `resetNotLikeAllPatterns` <a name="resetNotLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetNotLikeAllPatterns"></a>

```java
public void resetNotLikeAllPatterns()
```

##### `resetRegexPattern` <a name="resetRegexPattern" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetRegexPattern"></a>

```java
public void resetRegexPattern()
```

##### `resetSchemas` <a name="resetSchemas" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetSchemas"></a>

```java
public void resetSchemas()
```

##### `resetTableTypes` <a name="resetTableTypes" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.resetTableTypes"></a>

```java
public void resetTableTypes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.data_postgresql_tables.DataPostgresqlTables;

DataPostgresqlTables.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.data_postgresql_tables.DataPostgresqlTables;

DataPostgresqlTables.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.data_postgresql_tables.DataPostgresqlTables;

DataPostgresqlTables.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tables">tables</a></code> | <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList">DataPostgresqlTablesTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAllPatternsInput">likeAllPatternsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAnyPatternsInput">likeAnyPatternsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.notLikeAllPatternsInput">notLikeAllPatternsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.regexPatternInput">regexPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.schemasInput">schemasInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tableTypesInput">tableTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAllPatterns">likeAllPatterns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAnyPatterns">likeAnyPatterns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.notLikeAllPatterns">notLikeAllPatterns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.regexPattern">regexPattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tableTypes">tableTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tables"></a>

```java
public DataPostgresqlTablesTablesList getTables();
```

- *Type:* <a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList">DataPostgresqlTablesTablesList</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `likeAllPatternsInput`<sup>Optional</sup> <a name="likeAllPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAllPatternsInput"></a>

```java
public java.util.List<java.lang.String> getLikeAllPatternsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `likeAnyPatternsInput`<sup>Optional</sup> <a name="likeAnyPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAnyPatternsInput"></a>

```java
public java.util.List<java.lang.String> getLikeAnyPatternsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notLikeAllPatternsInput`<sup>Optional</sup> <a name="notLikeAllPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.notLikeAllPatternsInput"></a>

```java
public java.util.List<java.lang.String> getNotLikeAllPatternsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regexPatternInput`<sup>Optional</sup> <a name="regexPatternInput" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.regexPatternInput"></a>

```java
public java.lang.String getRegexPatternInput();
```

- *Type:* java.lang.String

---

##### `schemasInput`<sup>Optional</sup> <a name="schemasInput" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.schemasInput"></a>

```java
public java.util.List<java.lang.String> getSchemasInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tableTypesInput`<sup>Optional</sup> <a name="tableTypesInput" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tableTypesInput"></a>

```java
public java.util.List<java.lang.String> getTableTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `likeAllPatterns`<sup>Required</sup> <a name="likeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAllPatterns"></a>

```java
public java.util.List<java.lang.String> getLikeAllPatterns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `likeAnyPatterns`<sup>Required</sup> <a name="likeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.likeAnyPatterns"></a>

```java
public java.util.List<java.lang.String> getLikeAnyPatterns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notLikeAllPatterns`<sup>Required</sup> <a name="notLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.notLikeAllPatterns"></a>

```java
public java.util.List<java.lang.String> getNotLikeAllPatterns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regexPattern`<sup>Required</sup> <a name="regexPattern" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.regexPattern"></a>

```java
public java.lang.String getRegexPattern();
```

- *Type:* java.lang.String

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tableTypes`<sup>Required</sup> <a name="tableTypes" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tableTypes"></a>

```java
public java.util.List<java.lang.String> getTableTypes();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTables.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataPostgresqlTablesConfig <a name="DataPostgresqlTablesConfig" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.data_postgresql_tables.DataPostgresqlTablesConfig;

DataPostgresqlTablesConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .database(java.lang.String)
//  .id(java.lang.String)
//  .likeAllPatterns(java.util.List<java.lang.String>)
//  .likeAnyPatterns(java.util.List<java.lang.String>)
//  .notLikeAllPatterns(java.util.List<java.lang.String>)
//  .regexPattern(java.lang.String)
//  .schemas(java.util.List<java.lang.String>)
//  .tableTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.database">database</a></code> | <code>java.lang.String</code> | The PostgreSQL database which will be queried for table names. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#id DataPostgresqlTables#id}. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.likeAllPatterns">likeAllPatterns</a></code> | <code>java.util.List<java.lang.String></code> | Expression(s) which will be pattern matched against table names in the query using the PostgreSQL LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.likeAnyPatterns">likeAnyPatterns</a></code> | <code>java.util.List<java.lang.String></code> | Expression(s) which will be pattern matched against table names in the query using the PostgreSQL LIKE ANY operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.notLikeAllPatterns">notLikeAllPatterns</a></code> | <code>java.util.List<java.lang.String></code> | Expression(s) which will be pattern matched against table names in the query using the PostgreSQL NOT LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.regexPattern">regexPattern</a></code> | <code>java.lang.String</code> | Expression which will be pattern matched against table names in the query using the PostgreSQL ~ (regular expression match) operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | The PostgreSQL schema(s) which will be queried for table names. Queries all schemas in the database by default. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.tableTypes">tableTypes</a></code> | <code>java.util.List<java.lang.String></code> | The PostgreSQL table types which will be queried for table names. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The PostgreSQL database which will be queried for table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#database DataPostgresqlTables#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#id DataPostgresqlTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `likeAllPatterns`<sup>Optional</sup> <a name="likeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.likeAllPatterns"></a>

```java
public java.util.List<java.lang.String> getLikeAllPatterns();
```

- *Type:* java.util.List<java.lang.String>

Expression(s) which will be pattern matched against table names in the query using the PostgreSQL LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#like_all_patterns DataPostgresqlTables#like_all_patterns}

---

##### `likeAnyPatterns`<sup>Optional</sup> <a name="likeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.likeAnyPatterns"></a>

```java
public java.util.List<java.lang.String> getLikeAnyPatterns();
```

- *Type:* java.util.List<java.lang.String>

Expression(s) which will be pattern matched against table names in the query using the PostgreSQL LIKE ANY operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#like_any_patterns DataPostgresqlTables#like_any_patterns}

---

##### `notLikeAllPatterns`<sup>Optional</sup> <a name="notLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.notLikeAllPatterns"></a>

```java
public java.util.List<java.lang.String> getNotLikeAllPatterns();
```

- *Type:* java.util.List<java.lang.String>

Expression(s) which will be pattern matched against table names in the query using the PostgreSQL NOT LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#not_like_all_patterns DataPostgresqlTables#not_like_all_patterns}

---

##### `regexPattern`<sup>Optional</sup> <a name="regexPattern" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.regexPattern"></a>

```java
public java.lang.String getRegexPattern();
```

- *Type:* java.lang.String

Expression which will be pattern matched against table names in the query using the PostgreSQL ~ (regular expression match) operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#regex_pattern DataPostgresqlTables#regex_pattern}

---

##### `schemas`<sup>Optional</sup> <a name="schemas" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

The PostgreSQL schema(s) which will be queried for table names. Queries all schemas in the database by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#schemas DataPostgresqlTables#schemas}

---

##### `tableTypes`<sup>Optional</sup> <a name="tableTypes" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesConfig.property.tableTypes"></a>

```java
public java.util.List<java.lang.String> getTableTypes();
```

- *Type:* java.util.List<java.lang.String>

The PostgreSQL table types which will be queried for table names.

Includes all table types by default. Use 'BASE TABLE' for normal tables only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/data-sources/tables#table_types DataPostgresqlTables#table_types}

---

### DataPostgresqlTablesTables <a name="DataPostgresqlTablesTables" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTables.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.data_postgresql_tables.DataPostgresqlTablesTables;

DataPostgresqlTablesTables.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataPostgresqlTablesTablesList <a name="DataPostgresqlTablesTablesList" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.data_postgresql_tables.DataPostgresqlTablesTablesList;

new DataPostgresqlTablesTablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.get"></a>

```java
public DataPostgresqlTablesTablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataPostgresqlTablesTablesOutputReference <a name="DataPostgresqlTablesTablesOutputReference" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.data_postgresql_tables.DataPostgresqlTablesTablesOutputReference;

new DataPostgresqlTablesTablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.objectName">objectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.tableType">tableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTables">DataPostgresqlTablesTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectName`<sup>Required</sup> <a name="objectName" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.objectName"></a>

```java
public java.lang.String getObjectName();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `tableType`<sup>Required</sup> <a name="tableType" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.tableType"></a>

```java
public java.lang.String getTableType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTablesOutputReference.property.internalValue"></a>

```java
public DataPostgresqlTablesTables getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-postgresql.dataPostgresqlTables.DataPostgresqlTablesTables">DataPostgresqlTablesTables</a>

---



