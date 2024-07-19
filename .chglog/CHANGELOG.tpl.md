{{ if .Versions -}}
<a name="unreleased"></a>
## [Unreleased]
{{ if .Unreleased.MergeCommits -}}
{{ range .Unreleased.MergeCommits -}}
* [#{{ .Merge.Ref }}]({{ $.Info.RepositoryURL }}/pull-requests/{{ .Merge.Ref }}/overview) {{ .Merge.Source }}
{{ end }}
{{ end -}}


{{ if .Unreleased.CommitGroups -}}
{{ range .Unreleased.CommitGroups -}}

### {{ .Title }}
{{ range .Commits -}}
- {{ .Type }}: {{ .Subject }}
{{ end }}
{{ end -}}
{{ end -}}
{{ end -}}

{{ range .Versions }}
<a name="{{ .Tag.Name }}"></a>
## {{ if .Tag.Previous }}[{{ .Tag.Name }}]({{ $.Info.RepositoryURL }}/compare/diff?targetBranch=refs%2Ftags%2F{{ .Tag.Previous.Name }}&sourceBranch=refs%2Ftags%2F{{ .Tag.Name }}){{ else }}{{ .Tag.Name }}{{ end }} ({{ datetime "2006-01-02" .Tag.Date }})


{{- if .MergeCommits -}}
<br />
### Pull Requests

{{ range .MergeCommits -}}
* [#{{ .Merge.Ref }}]({{ $.Info.RepositoryURL }}/pull-requests/{{ .Merge.Ref }}/overview) {{ .Merge.Source }}
{{ end }}
{{ end -}}



{{ end -}}