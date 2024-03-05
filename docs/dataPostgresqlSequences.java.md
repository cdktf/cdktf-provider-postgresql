# `dataPostgresqlSequences` Submodule <a name="`dataPostgresqlSequences` Submodule" id="@cdktf/provider-postgresql.dataPostgresqlSequences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPostgresqlSequences <a name="DataPostgresqlSequences" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/data-sources/sequences postgresql_sequences}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.data_postgresql_sequences.DataPostgresqlSequences;

DataPostgresqlSequences.Builder.create(Construct scope, java.lang.String id)
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
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The PostgreSQL database which will be queried for sequence names. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/data-sources/sequences#id DataPostgresqlSequences#id}. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.likeAllPatterns">likeAllPatterns</a></code> | <code>java.util.List<java.lang.String></code> | Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.likeAnyPatterns">likeAnyPatterns</a></code> | <code>java.util.List<java.lang.String></code> | Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL LIKE ANY operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.notLikeAllPatterns">notLikeAllPatterns</a></code> | <code>java.util.List<java.lang.String></code> | Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL NOT LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.regexPattern">regexPattern</a></code> | <code>java.lang.String</code> | Expression which will be pattern matched against sequence names in the query using the PostgreSQL ~ (regular expression match) operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | The PostgreSQL schema(s) which will be queried for sequence names. Queries all schemas in the database by default. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The PostgreSQL database which will be queried for sequence names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/data-sources/sequences#database DataPostgresqlSequences#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/data-sources/sequences#id DataPostgresqlSequences#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `likeAllPatterns`<sup>Optional</sup> <a name="likeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.likeAllPatterns"></a>

- *Type:* java.util.List<java.lang.String>

Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/data-sources/sequences#like_all_patterns DataPostgresqlSequences#like_all_patterns}

---

##### `likeAnyPatterns`<sup>Optional</sup> <a name="likeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.likeAnyPatterns"></a>

- *Type:* java.util.List<java.lang.String>

Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL LIKE ANY operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/data-sources/sequences#like_any_patterns DataPostgresqlSequences#like_any_patterns}

---

##### `notLikeAllPatterns`<sup>Optional</sup> <a name="notLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.notLikeAllPatterns"></a>

- *Type:* java.util.List<java.lang.String>

Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL NOT LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/data-sources/sequences#not_like_all_patterns DataPostgresqlSequences#not_like_all_patterns}

---

##### `regexPattern`<sup>Optional</sup> <a name="regexPattern" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.regexPattern"></a>

- *Type:* java.lang.String

Expression which will be pattern matched against sequence names in the query using the PostgreSQL ~ (regular expression match) operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/data-sources/sequences#regex_pattern DataPostgresqlSequences#regex_pattern}

---

##### `schemas`<sup>Optional</sup> <a name="schemas" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.Initializer.parameter.schemas"></a>

- *Type:* java.util.List<java.lang.String>

The PostgreSQL schema(s) which will be queried for sequence names. Queries all schemas in the database by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/data-sources/sequences#schemas DataPostgresqlSequences#schemas}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetLikeAllPatterns">resetLikeAllPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetLikeAnyPatterns">resetLikeAnyPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetNotLikeAllPatterns">resetNotLikeAllPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetRegexPattern">resetRegexPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetSchemas">resetSchemas</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetId"></a>

```java
public void resetId()
```

##### `resetLikeAllPatterns` <a name="resetLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetLikeAllPatterns"></a>

```java
public void resetLikeAllPatterns()
```

##### `resetLikeAnyPatterns` <a name="resetLikeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetLikeAnyPatterns"></a>

```java
public void resetLikeAnyPatterns()
```

##### `resetNotLikeAllPatterns` <a name="resetNotLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetNotLikeAllPatterns"></a>

```java
public void resetNotLikeAllPatterns()
```

##### `resetRegexPattern` <a name="resetRegexPattern" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetRegexPattern"></a>

```java
public void resetRegexPattern()
```

##### `resetSchemas` <a name="resetSchemas" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.resetSchemas"></a>

```java
public void resetSchemas()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataPostgresqlSequences resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.data_postgresql_sequences.DataPostgresqlSequences;

DataPostgresqlSequences.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.data_postgresql_sequences.DataPostgresqlSequences;

DataPostgresqlSequences.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.data_postgresql_sequences.DataPostgresqlSequences;

DataPostgresqlSequences.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.data_postgresql_sequences.DataPostgresqlSequences;

DataPostgresqlSequences.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataPostgresqlSequences.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataPostgresqlSequences resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataPostgresqlSequences to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataPostgresqlSequences that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/data-sources/sequences#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataPostgresqlSequences to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.sequences">sequences</a></code> | <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList">DataPostgresqlSequencesSequencesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAllPatternsInput">likeAllPatternsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAnyPatternsInput">likeAnyPatternsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.notLikeAllPatternsInput">notLikeAllPatternsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.regexPatternInput">regexPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.schemasInput">schemasInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAllPatterns">likeAllPatterns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAnyPatterns">likeAnyPatterns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.notLikeAllPatterns">notLikeAllPatterns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.regexPattern">regexPattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `sequences`<sup>Required</sup> <a name="sequences" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.sequences"></a>

```java
public DataPostgresqlSequencesSequencesList getSequences();
```

- *Type:* <a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList">DataPostgresqlSequencesSequencesList</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `likeAllPatternsInput`<sup>Optional</sup> <a name="likeAllPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAllPatternsInput"></a>

```java
public java.util.List<java.lang.String> getLikeAllPatternsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `likeAnyPatternsInput`<sup>Optional</sup> <a name="likeAnyPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAnyPatternsInput"></a>

```java
public java.util.List<java.lang.String> getLikeAnyPatternsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notLikeAllPatternsInput`<sup>Optional</sup> <a name="notLikeAllPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.notLikeAllPatternsInput"></a>

```java
public java.util.List<java.lang.String> getNotLikeAllPatternsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regexPatternInput`<sup>Optional</sup> <a name="regexPatternInput" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.regexPatternInput"></a>

```java
public java.lang.String getRegexPatternInput();
```

- *Type:* java.lang.String

---

##### `schemasInput`<sup>Optional</sup> <a name="schemasInput" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.schemasInput"></a>

```java
public java.util.List<java.lang.String> getSchemasInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `likeAllPatterns`<sup>Required</sup> <a name="likeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAllPatterns"></a>

```java
public java.util.List<java.lang.String> getLikeAllPatterns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `likeAnyPatterns`<sup>Required</sup> <a name="likeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.likeAnyPatterns"></a>

```java
public java.util.List<java.lang.String> getLikeAnyPatterns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notLikeAllPatterns`<sup>Required</sup> <a name="notLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.notLikeAllPatterns"></a>

```java
public java.util.List<java.lang.String> getNotLikeAllPatterns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regexPattern`<sup>Required</sup> <a name="regexPattern" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.regexPattern"></a>

```java
public java.lang.String getRegexPattern();
```

- *Type:* java.lang.String

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequences.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataPostgresqlSequencesConfig <a name="DataPostgresqlSequencesConfig" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.data_postgresql_sequences.DataPostgresqlSequencesConfig;

DataPostgresqlSequencesConfig.builder()
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
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.database">database</a></code> | <code>java.lang.String</code> | The PostgreSQL database which will be queried for sequence names. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/data-sources/sequences#id DataPostgresqlSequences#id}. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.likeAllPatterns">likeAllPatterns</a></code> | <code>java.util.List<java.lang.String></code> | Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.likeAnyPatterns">likeAnyPatterns</a></code> | <code>java.util.List<java.lang.String></code> | Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL LIKE ANY operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.notLikeAllPatterns">notLikeAllPatterns</a></code> | <code>java.util.List<java.lang.String></code> | Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL NOT LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.regexPattern">regexPattern</a></code> | <code>java.lang.String</code> | Expression which will be pattern matched against sequence names in the query using the PostgreSQL ~ (regular expression match) operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | The PostgreSQL schema(s) which will be queried for sequence names. Queries all schemas in the database by default. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The PostgreSQL database which will be queried for sequence names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/data-sources/sequences#database DataPostgresqlSequences#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/data-sources/sequences#id DataPostgresqlSequences#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `likeAllPatterns`<sup>Optional</sup> <a name="likeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.likeAllPatterns"></a>

```java
public java.util.List<java.lang.String> getLikeAllPatterns();
```

- *Type:* java.util.List<java.lang.String>

Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/data-sources/sequences#like_all_patterns DataPostgresqlSequences#like_all_patterns}

---

##### `likeAnyPatterns`<sup>Optional</sup> <a name="likeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.likeAnyPatterns"></a>

```java
public java.util.List<java.lang.String> getLikeAnyPatterns();
```

- *Type:* java.util.List<java.lang.String>

Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL LIKE ANY operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/data-sources/sequences#like_any_patterns DataPostgresqlSequences#like_any_patterns}

---

##### `notLikeAllPatterns`<sup>Optional</sup> <a name="notLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.notLikeAllPatterns"></a>

```java
public java.util.List<java.lang.String> getNotLikeAllPatterns();
```

- *Type:* java.util.List<java.lang.String>

Expression(s) which will be pattern matched against sequence names in the query using the PostgreSQL NOT LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/data-sources/sequences#not_like_all_patterns DataPostgresqlSequences#not_like_all_patterns}

---

##### `regexPattern`<sup>Optional</sup> <a name="regexPattern" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.regexPattern"></a>

```java
public java.lang.String getRegexPattern();
```

- *Type:* java.lang.String

Expression which will be pattern matched against sequence names in the query using the PostgreSQL ~ (regular expression match) operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/data-sources/sequences#regex_pattern DataPostgresqlSequences#regex_pattern}

---

##### `schemas`<sup>Optional</sup> <a name="schemas" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesConfig.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

The PostgreSQL schema(s) which will be queried for sequence names. Queries all schemas in the database by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.22.0/docs/data-sources/sequences#schemas DataPostgresqlSequences#schemas}

---

### DataPostgresqlSequencesSequences <a name="DataPostgresqlSequencesSequences" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequences.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.data_postgresql_sequences.DataPostgresqlSequencesSequences;

DataPostgresqlSequencesSequences.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataPostgresqlSequencesSequencesList <a name="DataPostgresqlSequencesSequencesList" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.data_postgresql_sequences.DataPostgresqlSequencesSequencesList;

new DataPostgresqlSequencesSequencesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.get"></a>

```java
public DataPostgresqlSequencesSequencesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataPostgresqlSequencesSequencesOutputReference <a name="DataPostgresqlSequencesSequencesOutputReference" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.data_postgresql_sequences.DataPostgresqlSequencesSequencesOutputReference;

new DataPostgresqlSequencesSequencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.objectName">objectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequences">DataPostgresqlSequencesSequences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `objectName`<sup>Required</sup> <a name="objectName" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.objectName"></a>

```java
public java.lang.String getObjectName();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequencesOutputReference.property.internalValue"></a>

```java
public DataPostgresqlSequencesSequences getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-postgresql.dataPostgresqlSequences.DataPostgresqlSequencesSequences">DataPostgresqlSequencesSequences</a>

---



