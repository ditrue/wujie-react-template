#!/bin/bash

dir='/maindata/vite-test'

ssh ppt "rm -rf ${dir}/*"

scp -r dist/* ppt:$dir