# `dataPostgresqlSchemas` Submodule <a name="`dataPostgresqlSchemas` Submodule" id="@cdktf/provider-postgresql.dataPostgresqlSchemas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPostgresqlSchemas <a name="DataPostgresqlSchemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas postgresql_schemas}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.data_postgresql_schemas.DataPostgresqlSchemas;

DataPostgresqlSchemas.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .database(java.lang.String)
//  .id(java.lang.String)
//  .includeSystemSchemas(java.lang.Boolean|IResolvable)
//  .likeAllPatterns(java.util.List<java.lang.String>)
//  .likeAnyPatterns(java.util.List<java.lang.String>)
//  .notLikeAllPatterns(java.util.List<java.lang.String>)
//  .regexPattern(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The PostgreSQL database which will be queried for schema names. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#id DataPostgresqlSchemas#id}. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.includeSystemSchemas">includeSystemSchemas</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Determines whether to include system schemas (pg_ prefix and information_schema). 'public' will always be included. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.likeAllPatterns">likeAllPatterns</a></code> | <code>java.util.List<java.lang.String></code> | Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.likeAnyPatterns">likeAnyPatterns</a></code> | <code>java.util.List<java.lang.String></code> | Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ANY operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.notLikeAllPatterns">notLikeAllPatterns</a></code> | <code>java.util.List<java.lang.String></code> | Expression(s) which will be pattern matched in the query using the PostgreSQL NOT LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.regexPattern">regexPattern</a></code> | <code>java.lang.String</code> | Expression which will be pattern matched in the query using the PostgreSQL ~ (regular expression match) operator. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The PostgreSQL database which will be queried for schema names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#database DataPostgresqlSchemas#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#id DataPostgresqlSchemas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeSystemSchemas`<sup>Optional</sup> <a name="includeSystemSchemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.includeSystemSchemas"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Determines whether to include system schemas (pg_ prefix and information_schema). 'public' will always be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#include_system_schemas DataPostgresqlSchemas#include_system_schemas}

---

##### `likeAllPatterns`<sup>Optional</sup> <a name="likeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.likeAllPatterns"></a>

- *Type:* java.util.List<java.lang.String>

Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#like_all_patterns DataPostgresqlSchemas#like_all_patterns}

---

##### `likeAnyPatterns`<sup>Optional</sup> <a name="likeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.likeAnyPatterns"></a>

- *Type:* java.util.List<java.lang.String>

Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ANY operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#like_any_patterns DataPostgresqlSchemas#like_any_patterns}

---

##### `notLikeAllPatterns`<sup>Optional</sup> <a name="notLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.notLikeAllPatterns"></a>

- *Type:* java.util.List<java.lang.String>

Expression(s) which will be pattern matched in the query using the PostgreSQL NOT LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#not_like_all_patterns DataPostgresqlSchemas#not_like_all_patterns}

---

##### `regexPattern`<sup>Optional</sup> <a name="regexPattern" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.Initializer.parameter.regexPattern"></a>

- *Type:* java.lang.String

Expression which will be pattern matched in the query using the PostgreSQL ~ (regular expression match) operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#regex_pattern DataPostgresqlSchemas#regex_pattern}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetIncludeSystemSchemas">resetIncludeSystemSchemas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetLikeAllPatterns">resetLikeAllPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetLikeAnyPatterns">resetLikeAnyPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetNotLikeAllPatterns">resetNotLikeAllPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetRegexPattern">resetRegexPattern</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetId"></a>

```java
public void resetId()
```

##### `resetIncludeSystemSchemas` <a name="resetIncludeSystemSchemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetIncludeSystemSchemas"></a>

```java
public void resetIncludeSystemSchemas()
```

##### `resetLikeAllPatterns` <a name="resetLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetLikeAllPatterns"></a>

```java
public void resetLikeAllPatterns()
```

##### `resetLikeAnyPatterns` <a name="resetLikeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetLikeAnyPatterns"></a>

```java
public void resetLikeAnyPatterns()
```

##### `resetNotLikeAllPatterns` <a name="resetNotLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetNotLikeAllPatterns"></a>

```java
public void resetNotLikeAllPatterns()
```

##### `resetRegexPattern` <a name="resetRegexPattern" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.resetRegexPattern"></a>

```java
public void resetRegexPattern()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataPostgresqlSchemas resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.data_postgresql_schemas.DataPostgresqlSchemas;

DataPostgresqlSchemas.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.data_postgresql_schemas.DataPostgresqlSchemas;

DataPostgresqlSchemas.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.data_postgresql_schemas.DataPostgresqlSchemas;

DataPostgresqlSchemas.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.data_postgresql_schemas.DataPostgresqlSchemas;

DataPostgresqlSchemas.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataPostgresqlSchemas.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataPostgresqlSchemas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataPostgresqlSchemas to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataPostgresqlSchemas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataPostgresqlSchemas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.includeSystemSchemasInput">includeSystemSchemasInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAllPatternsInput">likeAllPatternsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAnyPatternsInput">likeAnyPatternsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.notLikeAllPatternsInput">notLikeAllPatternsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.regexPatternInput">regexPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.includeSystemSchemas">includeSystemSchemas</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAllPatterns">likeAllPatterns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAnyPatterns">likeAnyPatterns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.notLikeAllPatterns">notLikeAllPatterns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.regexPattern">regexPattern</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeSystemSchemasInput`<sup>Optional</sup> <a name="includeSystemSchemasInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.includeSystemSchemasInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeSystemSchemasInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `likeAllPatternsInput`<sup>Optional</sup> <a name="likeAllPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAllPatternsInput"></a>

```java
public java.util.List<java.lang.String> getLikeAllPatternsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `likeAnyPatternsInput`<sup>Optional</sup> <a name="likeAnyPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAnyPatternsInput"></a>

```java
public java.util.List<java.lang.String> getLikeAnyPatternsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notLikeAllPatternsInput`<sup>Optional</sup> <a name="notLikeAllPatternsInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.notLikeAllPatternsInput"></a>

```java
public java.util.List<java.lang.String> getNotLikeAllPatternsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regexPatternInput`<sup>Optional</sup> <a name="regexPatternInput" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.regexPatternInput"></a>

```java
public java.lang.String getRegexPatternInput();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includeSystemSchemas`<sup>Required</sup> <a name="includeSystemSchemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.includeSystemSchemas"></a>

```java
public java.lang.Boolean|IResolvable getIncludeSystemSchemas();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `likeAllPatterns`<sup>Required</sup> <a name="likeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAllPatterns"></a>

```java
public java.util.List<java.lang.String> getLikeAllPatterns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `likeAnyPatterns`<sup>Required</sup> <a name="likeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.likeAnyPatterns"></a>

```java
public java.util.List<java.lang.String> getLikeAnyPatterns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notLikeAllPatterns`<sup>Required</sup> <a name="notLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.notLikeAllPatterns"></a>

```java
public java.util.List<java.lang.String> getNotLikeAllPatterns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regexPattern`<sup>Required</sup> <a name="regexPattern" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.regexPattern"></a>

```java
public java.lang.String getRegexPattern();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemas.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataPostgresqlSchemasConfig <a name="DataPostgresqlSchemasConfig" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.data_postgresql_schemas.DataPostgresqlSchemasConfig;

DataPostgresqlSchemasConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .database(java.lang.String)
//  .id(java.lang.String)
//  .includeSystemSchemas(java.lang.Boolean|IResolvable)
//  .likeAllPatterns(java.util.List<java.lang.String>)
//  .likeAnyPatterns(java.util.List<java.lang.String>)
//  .notLikeAllPatterns(java.util.List<java.lang.String>)
//  .regexPattern(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.database">database</a></code> | <code>java.lang.String</code> | The PostgreSQL database which will be queried for schema names. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#id DataPostgresqlSchemas#id}. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.includeSystemSchemas">includeSystemSchemas</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Determines whether to include system schemas (pg_ prefix and information_schema). 'public' will always be included. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.likeAllPatterns">likeAllPatterns</a></code> | <code>java.util.List<java.lang.String></code> | Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.likeAnyPatterns">likeAnyPatterns</a></code> | <code>java.util.List<java.lang.String></code> | Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ANY operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.notLikeAllPatterns">notLikeAllPatterns</a></code> | <code>java.util.List<java.lang.String></code> | Expression(s) which will be pattern matched in the query using the PostgreSQL NOT LIKE ALL operator. |
| <code><a href="#@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.regexPattern">regexPattern</a></code> | <code>java.lang.String</code> | Expression which will be pattern matched in the query using the PostgreSQL ~ (regular expression match) operator. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The PostgreSQL database which will be queried for schema names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#database DataPostgresqlSchemas#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#id DataPostgresqlSchemas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeSystemSchemas`<sup>Optional</sup> <a name="includeSystemSchemas" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.includeSystemSchemas"></a>

```java
public java.lang.Boolean|IResolvable getIncludeSystemSchemas();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Determines whether to include system schemas (pg_ prefix and information_schema). 'public' will always be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#include_system_schemas DataPostgresqlSchemas#include_system_schemas}

---

##### `likeAllPatterns`<sup>Optional</sup> <a name="likeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.likeAllPatterns"></a>

```java
public java.util.List<java.lang.String> getLikeAllPatterns();
```

- *Type:* java.util.List<java.lang.String>

Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#like_all_patterns DataPostgresqlSchemas#like_all_patterns}

---

##### `likeAnyPatterns`<sup>Optional</sup> <a name="likeAnyPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.likeAnyPatterns"></a>

```java
public java.util.List<java.lang.String> getLikeAnyPatterns();
```

- *Type:* java.util.List<java.lang.String>

Expression(s) which will be pattern matched in the query using the PostgreSQL LIKE ANY operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#like_any_patterns DataPostgresqlSchemas#like_any_patterns}

---

##### `notLikeAllPatterns`<sup>Optional</sup> <a name="notLikeAllPatterns" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.notLikeAllPatterns"></a>

```java
public java.util.List<java.lang.String> getNotLikeAllPatterns();
```

- *Type:* java.util.List<java.lang.String>

Expression(s) which will be pattern matched in the query using the PostgreSQL NOT LIKE ALL operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#not_like_all_patterns DataPostgresqlSchemas#not_like_all_patterns}

---

##### `regexPattern`<sup>Optional</sup> <a name="regexPattern" id="@cdktf/provider-postgresql.dataPostgresqlSchemas.DataPostgresqlSchemasConfig.property.regexPattern"></a>

```java
public java.lang.String getRegexPattern();
```

- *Type:* java.lang.String

Expression which will be pattern matched in the query using the PostgreSQL ~ (regular expression match) operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.26.0/docs/data-sources/schemas#regex_pattern DataPostgresqlSchemas#regex_pattern}

---



